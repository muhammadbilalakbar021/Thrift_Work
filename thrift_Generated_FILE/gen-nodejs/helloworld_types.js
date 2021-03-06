//
// Autogenerated by Thrift Compiler (0.12.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = module.exports = {};
var hello = module.exports.hello = function(args) {
  this.number = null;
  this.first_Name = null;
  this.last_Name = null;
  this.age = null;
  if (args) {
    if (args.number !== undefined && args.number !== null) {
      this.number = args.number;
    }
    if (args.first_Name !== undefined && args.first_Name !== null) {
      this.first_Name = args.first_Name;
    }
    if (args.last_Name !== undefined && args.last_Name !== null) {
      this.last_Name = args.last_Name;
    }
    if (args.age !== undefined && args.age !== null) {
      this.age = args.age;
    }
  }
};
hello.prototype = {};
hello.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.number = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.first_Name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.last_Name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.age = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

hello.prototype.write = function(output) {
  output.writeStructBegin('hello');
  if (this.number !== null && this.number !== undefined) {
    output.writeFieldBegin('number', Thrift.Type.I32, 1);
    output.writeI32(this.number);
    output.writeFieldEnd();
  }
  if (this.first_Name !== null && this.first_Name !== undefined) {
    output.writeFieldBegin('first_Name', Thrift.Type.STRING, 2);
    output.writeString(this.first_Name);
    output.writeFieldEnd();
  }
  if (this.last_Name !== null && this.last_Name !== undefined) {
    output.writeFieldBegin('last_Name', Thrift.Type.STRING, 3);
    output.writeString(this.last_Name);
    output.writeFieldEnd();
  }
  if (this.age !== null && this.age !== undefined) {
    output.writeFieldBegin('age', Thrift.Type.I32, 4);
    output.writeI32(this.age);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

