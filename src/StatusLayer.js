var StatusLayer = cc.Layer.extend({
	ctor: function() {
		this._super();
		this.init();
	},

	init: function() {
		this._super();
		var winsize = cc.director.getWinSize();

		// add coin label
		this.labelCoin = cc.LabelTTF.create("Coin: 0", "Helvetica", 20);
		this.labelCoin.setColor(cc.color(0, 0, 0)); // black color
		this.labelCoin.setPosition(cc.p(70, winsize.height - 20));
		this.addChild(this.labelCoin);

		// add meter label
		this.labelMeter = cc.LabelTTF.create("0M", "Helvetica", 20);
		this.labelMeter.setPosition(cc.p(winsize.width - 70, winsize.height - 20));
		this.addChild(this.labelMeter);
	}
});