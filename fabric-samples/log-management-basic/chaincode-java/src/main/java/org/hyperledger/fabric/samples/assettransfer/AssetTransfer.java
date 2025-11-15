/*
 * SPDX-License-Identifier: Apache-2.0
 */

package org.hyperledger.fabric.samples.assettransfer;

import java.util.ArrayList;
import java.util.List;


import org.hyperledger.fabric.contract.Context;
import org.hyperledger.fabric.contract.ContractInterface;
import org.hyperledger.fabric.contract.annotation.Contact;
import org.hyperledger.fabric.contract.annotation.Contract;
import org.hyperledger.fabric.contract.annotation.Default;
import org.hyperledger.fabric.contract.annotation.Info;
import org.hyperledger.fabric.contract.annotation.License;
import org.hyperledger.fabric.contract.annotation.Transaction;
import org.hyperledger.fabric.shim.ChaincodeException;
import org.hyperledger.fabric.shim.ChaincodeStub;
import org.hyperledger.fabric.shim.ledger.KeyValue;
import org.hyperledger.fabric.shim.ledger.QueryResultsIterator;

import com.owlike.genson.Genson;

@Contract(
        name = "basic",
        info = @Info(
                title = "Log Transfer",
                description = "The hyperlegendary log transfer",
                version = "0.0.1-SNAPSHOT",
                license = @License(
                        name = "Apache 2.0 License",
                        url = "http://www.apache.org/licenses/LICENSE-2.0.html"),
                contact = @Contact(
                        email = "a.transfer@example.com",
                        name = "Adrian Transfer",
                        url = "https://hyperledger.example.com")))
@Default
public final class AssetTransfer implements ContractInterface {

    private final Genson genson = new Genson();

    private enum AssetTransferErrors {
        ASSET_NOT_FOUND,
        ASSET_ALREADY_EXISTS
    }

    /**
     * Creates some initial logs on the ledger.
     *
     * @param ctx the transaction context
     */
    @Transaction(intent = Transaction.TYPE.SUBMIT)
    public void InitLedger(final Context ctx) {
        putAsset(ctx, new Log("asset1", "blue", 5, "Tomoko", 300));
        putAsset(ctx, new Log("asset2", "red", 5, "Brad", 400));
        putAsset(ctx, new Log("asset3", "green", 10, "Jin Soo", 500));
        putAsset(ctx, new Log("asset4", "yellow", 10, "Max", 600));
        putAsset(ctx, new Log("asset5", "black", 15, "Adrian", 700));
        putAsset(ctx, new Log("asset6", "white", 15, "Michel", 700));

    }

    /**
     * Creates a new log on the ledger.
     *
     * @param ctx the transaction context
     * @param assetID the ID of the new log
     * @param color the color of the new log
     * @param size the size for the new log
     * @param owner the owner of the new log
     * @param appraisedValue the appraisedValue of the new log
     * @return the created log
     */
    @Transaction(intent = Transaction.TYPE.SUBMIT)
    public Log CreateLog(final Context ctx, final String assetID, final String color, final int size,
        final String owner, final int appraisedValue) {

        if (LogExists(ctx, assetID)) {
            String errorMessage = String.format("Log %s already exists", assetID);
            System.out.println(errorMessage);
            throw new ChaincodeException(errorMessage, AssetTransferErrors.ASSET_ALREADY_EXISTS.toString());
        }

        return putAsset(ctx, new Log(assetID, color, size, owner, appraisedValue));
    }

    private Log putAsset(final Context ctx, final Log log) {
        // Use Genson to convert the Log into string, sort it alphabetically and serialize it into a json string
        String sortedJson = genson.serialize(log);
        ctx.getStub().putStringState(log.getAssetID(), sortedJson);

        return log;
    }

    /**
     * Retrieves an log with the specified ID from the ledger.
     *
     * @param ctx the transaction context
     * @param assetID the ID of the log
     * @return the log found on the ledger if there was one
     */
    @Transaction(intent = Transaction.TYPE.EVALUATE)
    public Log ReadLog(final Context ctx, final String assetID) {
        String logJSON = ctx.getStub().getStringState(assetID);

        if (logJSON == null || logJSON.isEmpty()) {
            String errorMessage = String.format("Log %s does not exist", assetID);
            System.out.println(errorMessage);
            throw new ChaincodeException(errorMessage, AssetTransferErrors.ASSET_NOT_FOUND.toString());
        }

        return genson.deserialize(logJSON, Log.class);
    }

    /**
     * Updates the properties of an log on the ledger.
     *
     * @param ctx the transaction context
     * @param assetID the ID of the log being updated
     * @param color the color of the log being updated
     * @param size the size of the log being updated
     * @param owner the owner of the log being updated
     * @param appraisedValue the appraisedValue of the log being updated
     * @return the transferred log
     */
    @Transaction(intent = Transaction.TYPE.SUBMIT)
    public Log UpdateAsset(final Context ctx, final String assetID, final String color, final int size,
        final String owner, final int appraisedValue) {

        if (!LogExists(ctx, assetID)) {
            String errorMessage = String.format("Log %s does not exist", assetID);
            System.out.println(errorMessage);
            throw new ChaincodeException(errorMessage, AssetTransferErrors.ASSET_NOT_FOUND.toString());
        }

        return putAsset(ctx, new Log(assetID, color, size, owner, appraisedValue));
    }

    /**
     * Deletes log on the ledger.
     *
     * @param ctx the transaction context
     * @param assetID the ID of the log being deleted
     */
    @Transaction(intent = Transaction.TYPE.SUBMIT)
    public void DeleteAsset(final Context ctx, final String assetID) {
        if (!LogExists(ctx, assetID)) {
            String errorMessage = String.format("Log %s does not exist", assetID);
            System.out.println(errorMessage);
            throw new ChaincodeException(errorMessage, AssetTransferErrors.ASSET_NOT_FOUND.toString());
        }

        ctx.getStub().delState(assetID);
    }

    /**
     * Checks the existence of the log on the ledger
     *
     * @param ctx the transaction context
     * @param assetID the ID of the log
     * @return boolean indicating the existence of the log
     */
    @Transaction(intent = Transaction.TYPE.EVALUATE)
    public boolean LogExists(final Context ctx, final String assetID) {
        String logJSON = ctx.getStub().getStringState(assetID);

        return (logJSON != null && !logJSON.isEmpty());
    }

    /**
     * Changes the owner of a log on the ledger.
     *
     * @param ctx the transaction context
     * @param assetID the ID of the log being transferred
     * @param newOwner the new owner
     * @return the old owner
     */
    @Transaction(intent = Transaction.TYPE.SUBMIT)
    public String TransferAsset(final Context ctx, final String assetID, final String newOwner) {
        String logJSON = ctx.getStub().getStringState(assetID);

        if (logJSON == null || logJSON.isEmpty()) {
            String errorMessage = String.format("Log %s does not exist", assetID);
            System.out.println(errorMessage);
            throw new ChaincodeException(errorMessage, AssetTransferErrors.ASSET_NOT_FOUND.toString());
        }

        Log log = genson.deserialize(logJSON, Log.class);

        putAsset(ctx, new Log(log.getAssetID(), log.getColor(), log.getSize(), newOwner, log.getAppraisedValue()));

        return log.getOwner();
    }

    /**
     * Retrieves all logs from the ledger.
     *
     * @param ctx the transaction context
     * @return array of logs found on the ledger
     */
    @Transaction(intent = Transaction.TYPE.EVALUATE)
    public String GetAllLogs(final Context ctx) {
        ChaincodeStub stub = ctx.getStub();

        List<Log> queryResults = new ArrayList<>();

        // To retrieve all logs from the ledger use getStateByRange with empty startKey & endKey.
        // Giving empty startKey & endKey is interpreted as all the keys from beginning to end.
        // As another example, if you use startKey = 'asset0', endKey = 'asset9' ,
        // then getStateByRange will retrieve log with keys between asset0 (inclusive) and asset9 (exclusive) in lexical order.
        QueryResultsIterator<KeyValue> results = stub.getStateByRange("", "");

        for (KeyValue result: results) {
            Log log = genson.deserialize(result.getStringValue(), Log.class);
            System.out.println(log);
            queryResults.add(log);
        }

        return genson.serialize(queryResults);
    }
}
