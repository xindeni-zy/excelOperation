angular.module("app",[]).controller("appCtrl",["$scope",function(s){s.itemList=[{arwo01:1,arwosd02:"断电",arwosd04:20,arpc05:"66分钟"},{arwo01:1,arwosd02:"断电",arwosd04:20,arpc05:"66分钟"},{arwo01:1,arwosd02:"断电",arwosd04:20,arpc05:"66分钟"},{arwo01:1,arwosd02:"断电",arwosd04:20,arpc05:"66分钟"},{arwo01:1,arwosd02:"断电",arwosd04:20,arpc05:"66分钟"},{arwo01:1,arwosd02:"断电",arwosd04:20,arpc05:"66分钟"},{arwo01:1,arwosd02:"断电",arwosd04:20,arpc05:"66分钟"},{arwo01:1,arwosd02:"断电",arwosd04:20,arpc05:"66分钟"},{arwo01:1,arwosd02:"断电",arwosd04:20,arpc05:"66分钟"}],s.exportToData=function(){console.log(1);var a=[];if(s.itemList&&0<s.itemList.length){for(var r=0;r<s.itemList.length;r++){var o=s.itemList[r];a.push({"机台号":o.arwo01,"停机原因":o.arwosd02,"停机次数":o.arwosd04,"停机时长":o.arpc05})}alasql('SELECT * INTO XLSX("'+"test"+'.xlsx",{headers:true}) FROM ?',[a])}else alert("不存在内容")},s.fileLIst=[],s.newlyIncreased=function(a){alasql("SELECT * FROM FILE(?,{headers:false})",[a],function(a){for(var r=1;r<a.length;r++){var o={};o.ARS01=a[r].A,o.ARS02=a[r].B,o.ARS03=a[r].C,o.ARS04=a[r].D,o.ARS05=a[r].E,o.ARS06=a[r].F,o.ARS60=a[r].G,s.fileLIst.push(o)}console.log(s.fileLIst)})}}]);