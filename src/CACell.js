function CellAutoCell(locX, locY) {
	this.x = locX;
	this.y = locY;

	this.delays = [];
}

CellAutoCell.prototype.process = function(neighbors) {
	return;
};
CellAutoCell.prototype.countSurroundingCellsWithValue = function(neighbors, value) {
	var surrounding = 0;
	for (var i = 0; i < neighbors.length; i++) {
		if (neighbors[i] !== null && neighbors[i][value]) {
			surrounding++;
		}
	}
	return surrounding;
};
CellAutoCell.prototype.delay = function(numSteps, fn) {
	this.delays.push({ steps: numSteps, action: fn });
};

CellAutoCell.prototype.reset = function(neighbors) {
	return;
};

CellAutoCell.prototype.getSurroundingCellsAverageValue = function(neighbors, value) {
	var summed = 0.0;
	var cnt = 0;
	for (var i = 0; i < neighbors.length; i++) {
		if (neighbors[i] !== null && neighbors[i].hasOwnProperty(value)) {
			summed += neighbors[i].value;
			cnt++;
		}
	}
	if(cnt > 1)
		return summed / cnt;
	else
		return 0;
};