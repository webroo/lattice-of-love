var d=Math.sin,e=Math.cos,f=80,g=40,h=g,j=0,k=j,l=0,m,n,o=0;c.width=680;c.height=510;a.fillRect(0,0,680,510);a.fillStyle="#999";a.font="13px sans-serif";a.fillText("Click for a different kind of love",251,14);a.fillStyle="#000";c.onmousemove=function(p){h=38+4*(p.clientX/680);k=-80+160*(p.clientY/510)};c.onclick=function(){f=160*Math.random()};
setInterval(function(){l=0;m=n=void 0;g+=0.02*(h-g);j+=0.04*(k-j);o=(g-40)*j;a.globalAlpha=0.2;a.globalCompositeOperation="source-over";a.fillRect(0,19,680,510);a.globalAlpha=0.5;a.globalCompositeOperation="lighter";a.beginPath();for(i=0;1200>i;i++)l+=0.1,x=340+10*16*Math.pow(d(l),3),y=235+10*-(13*e(l)-5*e(2*l)-2*e(3*l)-e(4*l)),x+=j*e((f-g)/g*l),y-=j*d((f-g)/g*l),a.moveTo(m,n),a.lineTo(x,y),m=x,n=y;a.strokeStyle="hsl("+o+",60%,50%)";a.stroke();a.closePath()},16);
