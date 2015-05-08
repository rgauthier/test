//Custom overides for our ui device implementation

//Trigger a lighting event of type on for the approprite UI Device
LightDevice.prototype.turnOn = function(controlId) {
	var args = new Array(this.id, "on", this.controlId);

	$( document ).trigger( "lightingEvent", args );
}

//Trigger a lighting event of type off for the approprite UI Device
LightDevice.prototype.turnOff = function(controlId) {
	var args = new Array(this.id, "off", this.controlId);

	$( document ).trigger( "lightingEvent", args );
}

//Trigger a curtain event of type open for the approprite UI Device
CurtainDevice.prototype.openCurtain = function(controlId) {
	var args = new Array(this.id, "open", this.controlId);

	$( document ).trigger( "curtainEvent", args );
}

//Trigger a curtain event of type close for the approprite UI Device
CurtainDevice.prototype.closeCurtain = function(controlId) {
	var args = new Array(this.id, "close", this.controlId);

	$( document ).trigger( "curtainEvent", args );
}