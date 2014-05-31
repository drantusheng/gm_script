// ==UserScript==
// @name			Baidu Tieba Message Review Button
// @description		把贴吧T豆帐单更改为查看贴吧消息按纽
// @author			哆啦B梦的弟弟
// @updateURL		https://raw.githubusercontent.com/duola/gm_script/master/TiebaMessageReviewButton/BaiduTiebaMessageReviewButton.user.js
// @downloadURL		https://raw.githubusercontent.com/duola/gm_script/master/TiebaMessageReviewButton/BaiduTiebaMessageReviewButton.user.js
// @include			http://tieba.baidu.com/*
// @require			http://code.jquery.com/jquery-1.6.min.js
// @version			2014.05.31
// @icon			data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAMqElEQVR4nO3dX4RkZxoH4GKYqyEsIVdDCLkYyxDCsmQuErvZ6N6uc7YNuQphyNibXZKZru/IVQhLGHIVhjCE6LC3uzY2narvCGEISxiWoQkhV8MyLE32YpLZ6eme/lunvvPWeR5+919VnfPrt/utrhqNCvjd21vPVCmP68ns7Srlj+om3/4p23XT/igifUne/vn+rFL+6Kd7dvy7t7eeKdEdC7P6zhfP15Ocqqb9qvyLICKnTdW0X9WTnFbf+eL50v0yF+ON2UvjlN+vU75b+skVkQ6T8t1xyu+PN2Yvle6d41nfPFNNZm/UTXun+JMoIiVyp5rM3hitb54pXUcHqpr2TdOUiNRN+2Od8t2qad8s3Ut7rE22LlYpf138CRKR3qVK+eu1ydbF0j01urC+eXac8gd1yjulnxQR6XFS3hmn/MGF9c2zRcpqpZk++2Dd2YMnQ0SCJN9eaabPLrSsqsnstTq198o/eBEJl9TeqzamqwspqzrlK34FFJFTJeWdOuUrHZfV7N3iD1RElidp9m43ZTXJqfiDE5HlyySn+ZZVM3ur+IMSkSXO7K25lFW1MV31NysR6TQp75z6D/ErzfRZ20ARWUhSe+/Eb3m4sL55tk7tN8UfhIgMJ6n95kRvLh03+Ubxw4vI4DJu8o1jldXaZOuiv1uJSJGkvHP0/z1c3zzjQ/ZEpGSqpv3qSB9PU6d8pfRhRUQOfyf8+uYZn6suIv1I3j5wyvrpk0J7cFARkfbHajJ744Dpyscai0ivcmffKWs8aV/pweFERHZlPGlf2fvrYMq3Sh9MROTxVCnf2lVWl65unatTe7/0wURE9iS19y9d3Tr3yB/b29eLH0pE5AmpJu3rj/46+FHpA4mIPClVyjcfFpbvEhSRfidvj0aj0WjlWnu+/GFERA7OyrX2/KhKeVz6ICIih6XamP3BZ7WLSIxMcvL+KxEJkSrlWyMfJSMiEVI17Vej2v8PikiEpHx3VKf2u+IHERE5LKm9N/KtOCISIinvjIofYt/k7+sm3xaRQunpb169LKxxyu8/8VMGgc7Vqb1eugcUFnAkCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCkthQRgKS2FBGApLYUEYCusYqVL78dr1/MIy5+Vrnz9V+qKM7sL65tnSr+OypkqzD0v3wJMK67+lDzHMzN4qfcNH9vtr01/WTfuv8q+jLCwp74zq1N4rfpABpkqzD0vf9BFdWN88O27ye3XKO6VfQ1lwUntvVKd8t/hBBpgqtf8sffNHszbZulibqoablO+OqpS/Ln6QQSZ/X7oAojBVSd20P1Ypfz2qUvtp6YMMNb/5099/UboM+s5UJT+nSu2no3GT3yt9kKFmvDF7qXQh9JWpSh7PuMnvjao0vVz6IINNyldKF0Mfmapkv1Rpenm0cq09X/ogQ41N4W6mKjkoK9fa86PRaDSqm7xd+jBDjE3h/5mq5ODk7YcXS5XyzfIHGmBS+13BjugFU5UcJVXKNx9eNNWkfb30gYaaIW8KTVVy1FST9vWHF86lq1vn6tTeL32oIWac2l8X7IwiTFVyrKT2/qWrW+d2XURVyreKH2yIGdimcO16fqE2VckxUqV8a8+FNJ60r5Q+2BAzlE2hqUpOmvGkfWXvFbW+eaZu2julDze0VCn/Y/H1sVimKjlF7ozWN8/se2FVTftmDw44rCzxptBUJadN1bRvHniBeU/W4rOMm0JTlZw+efvC+ubZAy+0OuUr5Q86rCzTptBUJXPLkRZS65tn6ibfLn7YIWVJNoWmKplf8u0n/u1qz4U32broJ+TiMm7yjY67pFOmKplrUt5Zm2xdPNZFOG7yjeIHH0gibwpNVTLvnOgH+IX1zbN1ar8pffhBJOCm0FQlnSS13xz6h/YnWX3ni+d9ScViEmlTuJZmL9amKpl3Untv9Z0vnj/VxVltTFf9FO0+440vfzWnPumMqUo6S8o71cZ0dS4Xat3M3ir+gJY9Pd8Umqqk28z5ezrrNHu3/INa3vR1U2iqks4zyamTi1dpdZc+bgpNVdJpUt6pU/5zpxdxnfIVP227ePH6syk0VUn3yf8ZN/m3C7mgq43pat3k/5R/0MuVl699/tRCXsADmKqk86T236feBh7X6vWt57xPa74puSk0VckiUjX5y2Jv4bmwvnl2nPIHLvI5pdCm0FQlnSflnXHT/uXI/x/YpdXrW89VTf6s+JMSPOOUP1jk62aqkkWkavJnC/8V8CjW0uzFKuVc+gmKmirlvy3ytapT/rb0Y5blTZVyXkuzFxd1TZ9YNZm95mY4QRawKTRVSedJ+dtqMnut62t57sZN/m3V5E98hdjR0+Wm0FQlnSW196smf7Kwtyp06dLVrXNVml6uUvuxj2A+OF1sCk1V0k3ydpXaj6s0vbznewOXycq19nyVppfr1F6vUr754BNO8+26yd+XfxHK5sAP3T8BU5WcLvn7n+/PKuWbD+7Z6eWVZvrsPK9TDlGn9o/lL4a9mdem0FS1O1XKf311Y/b0PJ5bWLjxxuyl0jfRE26sU28KTVWPJOUfqjS9PI9rBop5dWP2dPGbad8b7OSbQlPV7piqWCp1yj+Uvqn2y0n+gPnTu9V9c3fTmqpYTlWTvyx+c+2T42wKTVW7Y6piaVVp9mHpG2zfm+6Im0JT1SMxVbHsom4KTVW7Y6piECJuCk1Vj8RUxZD0dlPY5O3Hz2qq2h1TFYMUYVNoqnokpiqGrM+bQlPV7piqGLy+bgrHTb5Rm6oexFQFD/R1UygPYqqCR/R1Uzj4mKpgr/5uCocbUxUcoK+bwsHFVAWH6+umcEgxVcER9XVTOIiYquB4bArLxFQFJ2BTuOCYquDkbAoXF1MVzIFNYccxVcH82BR2F1MVzJlNYQcxVUE3bArnG1MVdMimcE4xVUH3bApPH1MVLJBN4QljqoLFsyk8fkxVUIhN4TFiqoKybAqPFlMV9IBN4SExVUF/2BQ+OaYq6CGbwsdiqoL+sin8f0xV0HM2ha2pCqIY+qbQVAWBDHZTaKqCeIa4KTRVQWCD2RSaqiC+IWwKTVWwJJZ6U2iqguWyrJtCUxUsoaXbFJqqYHkt06bQVAUDEH5TaKqC4Yi8KTRVwcCE3BSaqmCYom0KTVUwYGE2haYqIMKm0FQFPNTbTaGpCnhcHzeFpipgX73aFJqqgIP0ZVNoqgIOVXxTaKoCjqrkptBUBRzbwjeFpirgpBa5KTRVAaeykE2hqQqYh643haYqYG462xSaqoB562JTaKoCOjO3TaGpCujaPDaFpipgIU61KTRVAYt00k2hqQpYuGNvCk1VQCnH2RSaqoDiDt0UmqqAvjhoU2iqAnpl302hqQroo8c3haYqoLcebgpNVUDfvboxe9pUBWX9D3qdX9EUHBO8AAAAAElFTkSuQmCC
// ==/UserScript==

$(document).ready(function(){
  var username = (typeof(unsafeWindow) !== "undefined" ? unsafeWindow : window).PageData.user.user_name;  //鸣谢@patwonder
	$("li[class=u_wallet]").html(
		"<div class='u_menu_item u_menu_wallet'><a style='background: url(&quot;http://imgsrc.baidu.com/forum/pic/item/bd8fb83533fa828ba5c20a1dff1f4134950a5a9f.jpg&quot;) no-repeat scroll 0px 0px transparent; height: 16px; width: 16px; margin-top: 1px;' class='u_menu_wrap u_wallet_wrap j_wallet' title='点击查看新回复' href='http://tieba.baidu.com/home/msg?un="+username+"&fr=home' target='_blank'></a></div>"
	);
});
