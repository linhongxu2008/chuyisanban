var AA=self.setInterval("lunbotu()",3000);
		        var btn = document.querySelector("button");
		        var img = document.querySelector("img")
		        a = 0;
		         function lunbotu(){
		            if( a == 0){
		                
		                img.src = "https://pic.imgdb.cn/item/61a23b1e2ab3f51d913552ac.jpg";
		                
						
		            }
					
					if (a==1) {
						img.src="https://pic.imgdb.cn/item/61a23b1e2ab3f51d9135529d.jpg"
					}
					if (a==2) {
						img.src="https://pic.imgdb.cn/item/61a23b1e2ab3f51d913552a6.jpg"
					}
					
					
		            if (a==2) {
		            	a=0
		            } else{
		            	++a;
		            }
					
		        }