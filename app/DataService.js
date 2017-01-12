function DataService() {
  this.str = "Initial String";
  this.num = 0;
  return;
}

DataService.prototype.GetNum = function() {
  return this.num;
}

DataService.prototype.Add = function() {
  this.num++;
  console.log(this.num);
  return;
}

DataService.prototype.GetStr = function() {
  return this.str;
}

DataService.prototype.SetStr = function(str) {
  this.str = str;
  return;
}

module.exports = new DataService();
