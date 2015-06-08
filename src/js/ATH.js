common = require('./common.js');
System = common.System;
VbrMode = common.VbrMode;
Float = common.Float;
ShortBlock = common.ShortBlock;
Util = common.Util;
Arrays = common.Arrays;
new_array_n = common.new_array_n;
new_byte = common.new_byte;
new_double = common.new_double;
new_float = common.new_float;
new_float_n = common.new_float_n;
new_int = common.new_int;
new_int_n = common.new_int_n;
Encoder = require('./Encoder.js');

/**
 * ATH related stuff, if something new ATH related has to be added, please plug
 * it here into the ATH.
 */
function ATH() {
    /**
     * Method for the auto adjustment.
     */
    this.useAdjust = 0;
    /**
     * factor for tuning the (sample power) point below which adaptive threshold
     * of hearing adjustment occurs
     */
    this.aaSensitivityP = 0.;
    /**
     * Lowering based on peak volume, 1 = no lowering.
     */
    this.adjust = 0.;
    /**
     * Limit for dynamic ATH adjust.
     */
    this.adjustLimit = 0.;
    /**
     * Determined to lower x dB each second.
     */
    this.decay = 0.;
    /**
     * Lowest ATH value.
     */
    this.floor = 0.;
    /**
     * ATH for sfbs in long blocks.
     */
    this.l = new_float(Encoder.SBMAX_l);
    /**
     * ATH for sfbs in short blocks.
     */
    this.s = new_float(Encoder.SBMAX_s);
    /**
     * ATH for partitioned sfb21 in long blocks.
     */
    this.psfb21 = new_float(Encoder.PSFB21);
    /**
     * ATH for partitioned sfb12 in short blocks.
     */
    this.psfb12 = new_float(Encoder.PSFB12);
    /**
     * ATH for long block convolution bands.
     */
    this.cb_l = new_float(Encoder.CBANDS);
    /**
     * ATH for short block convolution bands.
     */
    this.cb_s = new_float(Encoder.CBANDS);
    /**
     * Equal loudness weights (based on ATH).
     */
    this.eql_w = new_float(Encoder.BLKSIZE / 2);
}

module.exports = ATH;