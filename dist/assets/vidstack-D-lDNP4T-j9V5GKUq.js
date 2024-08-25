var W=m=>{throw TypeError(m)};var G=(m,t,s)=>t.has(m)||W("Cannot "+s);var e=(m,t,s)=>(G(m,t,"read from private field"),s?s.call(m):t.get(m)),T=(m,t,s)=>t.has(m)?W("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(m):t.set(m,s),c=(m,t,s,i)=>(G(m,t,"write to private field"),i?i.call(m,s):t.set(m,s),s),r=(m,t,s)=>(G(m,t,"access private method"),s);import{m as vt,o as A,R as At,A as Z,B as St,D as tt,c as O,l as et,e as It,C as Rt,L as bt}from"./index-xleVCo4H.js";import{getCastContext as Mt,getCastSession as wt,getCastSessionMedia as at,hasActiveCastSession as st,listenCastContextEvent as _t,getCastErrorMessage as Dt}from"./vidstack-Ce6HRkTa-CHzRtgyo.js";var g,N,rt;class Pt{constructor(t){T(this,N);T(this,g);c(this,g,new chrome.cast.media.MediaInfo(t.src,t.type))}build(){return e(this,g)}setStreamType(t){return t.includes("live")?e(this,g).streamType=chrome.cast.media.StreamType.LIVE:e(this,g).streamType=chrome.cast.media.StreamType.BUFFERED,this}setTracks(t){return e(this,g).tracks=t.map(r(this,N,rt)),this}setMetadata(t,s){return e(this,g).metadata=new chrome.cast.media.GenericMediaMetadata,e(this,g).metadata.title=t,e(this,g).metadata.images=[{url:s}],this}}g=new WeakMap,N=new WeakSet,rt=function(t,s){const i=new chrome.cast.media.Track(s,chrome.cast.media.TrackType.TEXT);return i.name=t.label,i.trackContentId=t.src,i.trackContentType="text/vtt",i.language=t.language,i.subtype=t.kind.toUpperCase(),i};const V=chrome.cast.media.TrackType.TEXT,it=chrome.cast.media.TrackType.AUDIO;var C,k,_,d,$,b,nt,ot,ht,H,P,U;class Nt{constructor(t,s,i){T(this,d);T(this,C);T(this,k);T(this,_);c(this,C,t),c(this,k,s),c(this,_,i)}setup(){const t=this.syncRemoteActiveIds.bind(this);et(e(this,k).audioTracks,"change",t),et(e(this,k).textTracks,"mode-change",t),It(r(this,d,ot).bind(this))}getLocalTextTracks(){return e(this,k).$state.textTracks().filter(t=>t.src&&t.type==="vtt")}syncRemoteTracks(t){if(!e(this,C).isMediaLoaded)return;const s=r(this,d,$).call(this),i=this.getLocalTextTracks(),n=r(this,d,b).call(this,it),l=r(this,d,b).call(this,V);for(const u of n){if(r(this,d,H).call(this,s,u))continue;const w={id:u.trackId.toString(),label:u.name,language:u.language,kind:u.subtype??"main",selected:!1};e(this,k).audioTracks[bt.add](w,t)}for(const u of l){if(r(this,d,H).call(this,i,u))continue;const w={id:u.trackId.toString(),src:u.trackContentId,label:u.name,language:u.language,kind:u.subtype.toLowerCase()};e(this,k).textTracks.add(w,t)}}syncRemoteActiveIds(t){if(!e(this,C).isMediaLoaded)return;const s=r(this,d,nt).call(this),i=new chrome.cast.media.EditTracksInfoRequest(s);r(this,d,ht).call(this,i).catch(n=>{})}}C=new WeakMap,k=new WeakMap,_=new WeakMap,d=new WeakSet,$=function(){return e(this,k).$state.audioTracks()},b=function(t){var i;const s=((i=e(this,C).mediaInfo)==null?void 0:i.tracks)??[];return t?s.filter(n=>n.type===t):s},nt=function(){const t=[],s=r(this,d,$).call(this).find(n=>n.selected),i=this.getLocalTextTracks().filter(n=>n.mode==="showing");if(s){const n=r(this,d,b).call(this,it),l=r(this,d,P).call(this,n,s);l&&t.push(l.trackId)}if(i!=null&&i.length){const n=r(this,d,b).call(this,V);if(n.length)for(const l of i){const u=r(this,d,P).call(this,n,l);u&&t.push(u.trackId)}}return t},ot=function(){const t=this.getLocalTextTracks();if(!e(this,C).isMediaLoaded)return;const s=r(this,d,b).call(this,V);for(const i of t)if(!r(this,d,P).call(this,s,i)){Rt(()=>{var l;return(l=e(this,_))==null?void 0:l.call(this)});break}},ht=function(t){const s=at();return new Promise((i,n)=>s==null?void 0:s.editTracksInfo(t,i,n))},H=function(t,s){return t.find(i=>r(this,d,U).call(this,i,s))},P=function(t,s){return t.find(i=>r(this,d,U).call(this,s,i))},U=function(t,s){return s.name===t.label&&s.language===t.language&&s.subtype.toLowerCase()===t.kind.toLowerCase()};var o,h,E,p,M,S,L,v,I,D,f,R,a,ct,dt,F,ut,q,lt,mt,Tt,B,Y,K,X,ft,gt,kt,j,yt,z,pt,J,y,Ct,Et,Q,Lt;class Vt{constructor(t,s){T(this,a);T(this,o);T(this,h);T(this,E);T(this,p);T(this,M);T(this,S);T(this,L);T(this,v);T(this,I);T(this,D);T(this,f);T(this,R);this.$$PROVIDER_TYPE="GOOGLE_CAST",this.scope=vt(),c(this,p,null),c(this,M,"disconnected"),c(this,S,0),c(this,L,0),c(this,v,new A(0,0)),c(this,I,new At(r(this,a,mt).bind(this))),c(this,f,null),c(this,R,!1),c(this,o,t),c(this,h,s),c(this,E,new Nt(t,s,r(this,a,Lt).bind(this)))}get type(){return"google-cast"}get currentSrc(){return e(this,p)}get player(){return e(this,o)}get cast(){return Mt()}get session(){return wt()}get media(){return at()}get hasActiveSession(){return st(e(this,p))}setup(){r(this,a,ct).call(this),r(this,a,dt).call(this),e(this,E).setup(),e(this,h).notify("provider-setup",this)}async play(){var t;if(!(!e(this,o).isPaused&&!e(this,R))){if(e(this,R)){await r(this,a,Q).call(this,!1,0);return}(t=e(this,o).controller)==null||t.playOrPause()}}async pause(){var t;e(this,o).isPaused||(t=e(this,o).controller)==null||t.playOrPause()}getMediaStatus(t){return new Promise((s,i)=>{var n;(n=this.media)==null||n.getStatus(t,s,i)})}setMuted(t){var i;(t&&!e(this,o).isMuted||!t&&e(this,o).isMuted)&&((i=e(this,o).controller)==null||i.muteOrUnmute())}setCurrentTime(t){var s;e(this,o).currentTime=t,e(this,h).notify("seeking",t),(s=e(this,o).controller)==null||s.seek()}setVolume(t){var s;e(this,o).volumeLevel=t,(s=e(this,o).controller)==null||s.setVolumeLevel()}async loadSource(t){var n;if(((n=e(this,f))==null?void 0:n.src)!==t&&c(this,f,null),st(t)){r(this,a,ut).call(this),c(this,p,t);return}e(this,h).notify("load-start");const s=r(this,a,Et).call(this,t),i=await this.session.loadMedia(s);if(i){c(this,p,null),e(this,h).notify("error",Error(Dt(i)));return}c(this,p,t)}destroy(){r(this,a,F).call(this),r(this,a,q).call(this)}}o=new WeakMap,h=new WeakMap,E=new WeakMap,p=new WeakMap,M=new WeakMap,S=new WeakMap,L=new WeakMap,v=new WeakMap,I=new WeakMap,D=new WeakMap,f=new WeakMap,R=new WeakMap,a=new WeakSet,ct=function(){_t(cast.framework.CastContextEventType.CAST_STATE_CHANGED,r(this,a,B).bind(this))},dt=function(){const t=cast.framework.RemotePlayerEventType,s={[t.IS_CONNECTED_CHANGED]:r(this,a,B),[t.IS_MEDIA_LOADED_CHANGED]:r(this,a,Y),[t.CAN_CONTROL_VOLUME_CHANGED]:r(this,a,K),[t.CAN_SEEK_CHANGED]:r(this,a,X),[t.DURATION_CHANGED]:r(this,a,kt),[t.IS_MUTED_CHANGED]:r(this,a,j),[t.VOLUME_LEVEL_CHANGED]:r(this,a,j),[t.IS_PAUSED_CHANGED]:r(this,a,yt),[t.LIVE_SEEKABLE_RANGE_CHANGED]:r(this,a,z),[t.PLAYER_STATE_CHANGED]:r(this,a,pt)};c(this,D,s);const i=r(this,a,Tt).bind(this);for(const n of Z(s))e(this,o).controller.addEventListener(n,i);St(()=>{for(const n of Z(s))e(this,o).controller.removeEventListener(n,i)})},F=function(){e(this,f)||(c(this,L,0),c(this,v,new A(0,0))),e(this,I).stop(),c(this,S,0),c(this,f,null)},ut=function(){const t=new tt("resume-session",{detail:this.session});r(this,a,Y).call(this,t);const{muted:s,volume:i,savedState:n}=e(this,h).$state,l=n();this.setCurrentTime(Math.max(e(this,o).currentTime,(l==null?void 0:l.currentTime)??0)),this.setMuted(s()),this.setVolume(i()),(l==null?void 0:l.paused)===!1&&this.play()},q=function(){this.cast.endCurrentSession(!0);const{remotePlaybackLoader:t}=e(this,h).$state;t.set(null)},lt=function(){const{savedState:t}=e(this,h).$state;t.set({paused:e(this,o).isPaused,currentTime:e(this,o).currentTime}),r(this,a,q).call(this)},mt=function(){r(this,a,gt).call(this)},Tt=function(t){e(this,D)[t.type].call(this,t)},B=function(t){const s=this.cast.getCastState(),i=s===cast.framework.CastState.CONNECTED?"connected":s===cast.framework.CastState.CONNECTING?"connecting":"disconnected";if(e(this,M)===i)return;const n={type:"google-cast",state:i},l=r(this,a,y).call(this,t);c(this,M,i),e(this,h).notify("remote-playback-change",n,l),i==="disconnected"&&r(this,a,lt).call(this)},Y=function(t){if(!!!e(this,o).isMediaLoaded)return;const i=O(e(this,h).$state.source);Promise.resolve().then(()=>{if(i!==O(e(this,h).$state.source)||!e(this,o).isMediaLoaded)return;r(this,a,F).call(this);const n=e(this,o).duration;c(this,v,new A(0,n));const l={provider:this,duration:n,buffered:new A(0,0),seekable:r(this,a,J).call(this)},u=r(this,a,y).call(this,t);e(this,h).notify("loaded-metadata",void 0,u),e(this,h).notify("loaded-data",void 0,u),e(this,h).notify("can-play",l,u),r(this,a,K).call(this),r(this,a,X).call(this,t);const{volume:x,muted:w}=e(this,h).$state;this.setVolume(x()),this.setMuted(w()),e(this,I).start(),e(this,E).syncRemoteTracks(u),e(this,E).syncRemoteActiveIds(u)})},K=function(){e(this,h).$state.canSetVolume.set(e(this,o).canControlVolume)},X=function(t){const s=r(this,a,y).call(this,t);e(this,h).notify("stream-type-change",r(this,a,ft).call(this),s)},ft=function(){var s;return((s=e(this,o).mediaInfo)==null?void 0:s.streamType)===chrome.cast.media.StreamType.LIVE?e(this,o).canSeek?"live:dvr":"live":"on-demand"},gt=function(){if(e(this,f))return;const t=e(this,o).currentTime;t!==e(this,S)&&(e(this,h).notify("time-change",t),t>e(this,L)&&(c(this,L,t),r(this,a,z).call(this)),e(this,h).$state.seeking()&&e(this,h).notify("seeked",t),c(this,S,t))},kt=function(t){if(!e(this,o).isMediaLoaded||e(this,f))return;const s=e(this,o).duration,i=r(this,a,y).call(this,t);c(this,v,new A(0,s)),e(this,h).notify("duration-change",s,i)},j=function(t){if(!e(this,o).isMediaLoaded)return;const s={muted:e(this,o).isMuted,volume:e(this,o).volumeLevel},i=r(this,a,y).call(this,t);e(this,h).notify("volume-change",s,i)},yt=function(t){const s=r(this,a,y).call(this,t);e(this,o).isPaused?e(this,h).notify("pause",void 0,s):e(this,h).notify("play",void 0,s)},z=function(t){const s={seekable:r(this,a,J).call(this),buffered:new A(0,e(this,L))},i=t?r(this,a,y).call(this,t):void 0;e(this,h).notify("progress",s,i)},pt=function(t){const s=e(this,o).playerState,i=chrome.cast.media.PlayerState;if(c(this,R,s===i.IDLE),s===i.PAUSED)return;const n=r(this,a,y).call(this,t);switch(s){case i.PLAYING:e(this,h).notify("playing",void 0,n);break;case i.BUFFERING:e(this,h).notify("waiting",void 0,n);break;case i.IDLE:e(this,I).stop(),e(this,h).notify("pause"),e(this,h).notify("end");break}},J=function(){return e(this,o).liveSeekableRange?new A(e(this,o).liveSeekableRange.start,e(this,o).liveSeekableRange.end):e(this,v)},y=function(t){return t instanceof Event?t:new tt(t.type,{detail:t})},Ct=function(t){const{streamType:s,title:i,poster:n}=e(this,h).$state;return new Pt(t).setMetadata(i(),n()).setStreamType(s()).setTracks(e(this,E).getLocalTextTracks()).build()},Et=function(t){var l,u;const s=r(this,a,Ct).call(this,t),i=new chrome.cast.media.LoadRequest(s),n=e(this,h).$state.savedState();return i.autoplay=(((l=e(this,f))==null?void 0:l.paused)??(n==null?void 0:n.paused))===!1,i.currentTime=((u=e(this,f))==null?void 0:u.time)??(n==null?void 0:n.currentTime)??0,i},Q=async function(t,s){const i=O(e(this,h).$state.source);c(this,f,{src:i,paused:t,time:s}),await this.loadSource(i)},Lt=function(){r(this,a,Q).call(this,e(this,o).isPaused,e(this,o).currentTime).catch(t=>{})};export{Vt as GoogleCastProvider};
