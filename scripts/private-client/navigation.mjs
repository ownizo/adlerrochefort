// German-only chrome addition. Never loaded by PT pages or shared stylesheets.
export const PRIVATE_CLIENT_NAV_STYLE = `<style id="private-client-navigation">
.nav-right .pc-nav-link{color:#fff!important;font-size:12px;line-height:1.4;text-underline-offset:4px}
@media(max-width:700px){
.site-header .site-nav{height:auto;min-height:100px;flex-wrap:wrap;gap:14px;padding:14px 20px}
.site-header .nav-right{width:100%;display:grid;grid-template-columns:1fr auto;gap:14px;min-width:0}
.site-header .pc-nav-link{grid-column:1/-1}
.site-header .nav-cta{white-space:normal;text-align:center}
}
</style>`;
