import { RPC } from './index'
var s = new RPC()
s.Data = 12121
var a = RPC.decode(s.encode());
console.log(a)
