var jishiqi=self.setInterval("clock()",1);
			function clock(a){
				 var today=new Date();
		var h=today.getHours();
		var m=today.getMinutes();
		
		if(m<10){
			m="0"+m
			}
		if(h<10){
			h="0"+h
			}
			
				var a="hm"
	document.getElementById(a).innerHTML =h+":"+m;//"dfd填元素ID"

		}
		var a=self.setInterval("clocks()",1);
		function clocks(){
			 var today=new Date();
			var s=today.getSeconds();
			if(s<10){
				s="0"+s 
				}
				document.getElementById("s").innerHTML =" "+s+"秒"
		}
		
			
		   