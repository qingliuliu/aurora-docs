"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4790],{931:(s,n,a)=>{a.r(n),a.d(n,{data:()=>p});const p={key:"v-118e2c5a",path:"/feature/social.html",title:"社交",lang:"en-US",frontmatter:{date:"2021/9/20"},excerpt:"",headers:[{level:2,title:"配置",slug:"配置",children:[]},{level:2,title:"修改图标",slug:"修改图标",children:[]},{level:2,title:"评论配置",slug:"评论配置",children:[]}],git:{updatedTime:1658921331e3,contributors:[{name:"qsyyke",email:"2291308094@qq.com",commits:1}]}}},1496:(s,n,a)=>{a.r(n),a.d(n,{default:()=>y});var p=a(6252);const e=(0,p._)("h1",{id:"社交",tabindex:"-1"},[(0,p._)("a",{class:"header-anchor",href:"#社交","aria-hidden":"true"},"#"),(0,p.Uk)(" 社交")],-1),t=(0,p._)("p",null,[(0,p._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"",originSrc:"https://picture.xcye.xyz/image-20211011151211549.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),o=(0,p.uE)('<img src="https://picture.xcye.xyz/image-20211011151225054.png?x-oss-process=style/pictureProcess1" alt="image-20211011151225054" style="zoom:50%;"><blockquote><p>组件位置</p><p>docs/.vuepress/theme/lib/client/components/child/side/HomeSidebarSocialItem.vue</p></blockquote><p>其中，手机端至多显示7个(<code>首页</code>)，侧边栏等不受影响，PC端首页至多只能显示19个，如果超过，则不会显示，侧边栏不受影响</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n\n    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">socials</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n                <span class="token comment">//社交链接</span>\n                <span class="token literal-property property">aHref</span><span class="token operator">:</span> <span class="token string">&quot;tencent://message/?uin=2291308094&quot;</span><span class="token punctuation">,</span>\n                <span class="token comment">// imgSrc: &quot;https://ooszy.cco.vin/img/ico/qq.svg&quot;, 从v1.3.2开始久移除次配置，以前版本用于社交ico图标配置</span>\n\n                <span class="token comment">//true为在首页显示，反之</span>\n                <span class="token literal-property property">isHome</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\n                <span class="token comment">//是否显示此社交信息,如果为false，尽管isHome=true，sidebar=true，也不会显示</span>\n                <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\n                <span class="token comment">//是否在侧边栏显示</span>\n                <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\n                <span class="token comment">//使用阿里图标 使用的是阿里图标库，我也挑选部分图标，请进入http://ico.cco.vin/theme查看</span>\n                <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">&#39;#icon-qq&#39;</span><span class="token punctuation">,</span>\n\n                <span class="token comment">//鼠标移入此图标时，显示的图片，适用于微信等通过二维码添加好友</span>\n                <span class="token comment">// showImgSrc: &quot;https://ooszy.cco.vin/img/blog-public/wechat.jpg&quot;,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n                <span class="token literal-property property">aHref</span><span class="token operator">:</span> <span class="token string">&quot;javascript:;&quot;</span><span class="token punctuation">,</span>\n                <span class="token comment">//imgSrc: /assets/img/ico/wechat.svg,</span>\n                <span class="token literal-property property">showImgSrc</span><span class="token operator">:</span> <span class="token string">&quot;https://ooszy.cco.vin/img/blog-public/wechat.jpg&quot;</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">isHome</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">&#39;#icon-weixin&#39;</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token boolean">true</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n                <span class="token literal-property property">aHref</span><span class="token operator">:</span> <span class="token string">&quot;https://github.com/qsyyke/&quot;</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">isHome</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">&#39;#icon-github-fill&#39;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n                <span class="token literal-property property">aHref</span><span class="token operator">:</span> <span class="token string">&quot;https://stackoverflow.com/&quot;</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">isHome</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">&#39;#icon-stackoverflow&#39;</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token boolean">true</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n                <span class="token literal-property property">aHref</span><span class="token operator">:</span> <span class="token string">&quot;https://space.bilibili.com/483962286&quot;</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">isHome</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">&#39;#icon-bilibili-1&#39;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n                <span class="token literal-property property">aHref</span><span class="token operator">:</span> <span class="token string">&quot;https://music.163.com/#/user/home?id=1411050784&quot;</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">isHome</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">&#39;#icon-wangyiyunyinle&#39;</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token boolean">true</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n                <span class="token literal-property property">aHref</span><span class="token operator">:</span> <span class="token string">&quot;mailto:2291308094@qq.com&quot;</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">isHome</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">&#39;#icon-email&#39;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>配置项解释，请查看</p></div><h2 id="修改图标" tabindex="-1"><a class="header-anchor" href="#修改图标" aria-hidden="true">#</a> 修改图标</h2><p>社交图标全部使用的是阿里图标库，我选了一些最常用的图标，你可以自己挑选</p>',8),r=(0,p.Uk)("地址为"),l={href:"http://aurora-font.cco.vin/",target:"_blank",rel:"noopener noreferrer"},c=(0,p.Uk)("iconfont Demo (cco.vin)"),i=(0,p.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n\n    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">socials</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n                <span class="token literal-property property">aHref</span><span class="token operator">:</span> <span class="token string">&quot;javascript:;&quot;</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">showImgSrc</span><span class="token operator">:</span> <span class="token string">&quot;https://ooszy.cco.vin/img/blog-public/wechat.jpg&quot;</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">isHome</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">&#39;#icon-weixin&#39;</span><span class="token punctuation">,</span>\n                <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token boolean">true</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span>\n\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><img src="https://picture.xcye.xyz/image-20211011155752690.png?x-oss-process=style/pictureProcess1" alt="image-20211011155752690" style="zoom:50%;">',2),u=(0,p._)("p",null,[(0,p._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"",originSrc:"https://picture.xcye.xyz/image-20211011155915438.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),b=(0,p._)("h2",{id:"评论配置",tabindex:"-1"},[(0,p._)("a",{class:"header-anchor",href:"#评论配置","aria-hidden":"true"},"#"),(0,p.Uk)(" 评论配置")],-1),k=(0,p.Uk)("评论配置"),m={},y=(0,a(3744).Z)(m,[["render",function(s,n){const a=(0,p.up)("ExternalLinkIcon"),m=(0,p.up)("RouterLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[e,t,o,(0,p._)("p",null,[r,(0,p._)("a",l,[c,(0,p.Wm)(a)])]),i,u,b,(0,p._)("p",null,[(0,p.Wm)(m,{to:"/comment/"},{default:(0,p.w5)((()=>[k])),_:1})])],64)}]])}}]);