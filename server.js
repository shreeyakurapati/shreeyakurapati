// Tiny zero-dependency static server for local preview: `npm start`
const http=require('http'),fs=require('fs'),path=require('path');
const T={'.html':'text/html','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.json':'application/json','.png':'image/png','.jpg':'image/jpeg','.pdf':'application/pdf'};
const port=process.env.PORT||8080;
http.createServer((q,r)=>{let f=path.join(__dirname,decodeURIComponent(q.url.split('?')[0]));
 if(!f.startsWith(__dirname)){r.writeHead(403);return r.end()}
 if(fs.existsSync(f)&&fs.statSync(f).isDirectory())f=path.join(f,'index.html');
 fs.readFile(f,(e,d)=>{if(e){r.writeHead(404);return r.end('Not found')}r.writeHead(200,{'Content-Type':T[path.extname(f)]||'application/octet-stream'});r.end(d)})
}).listen(port,()=>console.log('Site running at http://localhost:'+port));
