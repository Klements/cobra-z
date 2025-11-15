/*
 * SPDX-License-Identifier: Apache-2.0
 */

package org.hyperledger.fabric.samples.assettransfer;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

public final class AssetTest {

    @Nested
    class Equality {

        @Test
        public void isReflexive() {
            Log log = new Log("asset1", "Blue", 20, "Guy", 100);

            assertThat(log).isEqualTo(log);
        }

        @Test
        public void isSymmetric() {
            Log assetA = new Log("asset1", "Blue", 20, "Guy", 100);
            Log assetB = new Log("asset1", "Blue", 20, "Guy", 100);

            assertThat(assetA).isEqualTo(assetB);
            assertThat(assetB).isEqualTo(assetA);
        }

        @Test
        public void isTransitive() {
            Log assetA = new Log("asset1", "Blue", 20, "Guy", 100);
            Log assetB = new Log("asset1", "Blue", 20, "Guy", 100);
            Log assetC = new Log("asset1", "Blue", 20, "Guy", 100);

            assertThat(assetA).isEqualTo(assetB);
            assertThat(assetB).isEqualTo(assetC);
            assertThat(assetA).isEqualTo(assetC);
        }

        @Test
        public void handlesInequality() {
            Log assetA = new Log("asset1", "Blue", 20, "Guy", 100);
            Log assetB = new Log("asset2", "Red", 40, "Lady", 200);

            assertThat(assetA).isNotEqualTo(assetB);
        }

        @Test
        public void handlesOtherObjects() {
            Log assetA = new Log("asset1", "Blue", 20, "Guy", 100);
            String assetB = "not a log";

            assertThat(assetA).isNotEqualTo(assetB);
        }

        @Test
        public void handlesNull() {
            Log log = new Log("asset1", "Blue", 20, "Guy", 100);

            assertThat(log).isNotEqualTo(null);
        }
    }

    @Test
    public void toStringIdentifiesAsset() {
        Log log = new Log("asset1", "Blue", 20, "Guy", 100);

        assertThat(log.toString()).isEqualTo("Log@e04f6c53 [assetID=asset1, color=Blue, size=20, owner=Guy, appraisedValue=100]");
    }
}
