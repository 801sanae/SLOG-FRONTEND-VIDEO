<script>
    import { Route } from 'tinro';

    import Articles from './pages/Articles.svelte';
    import Login from './pages/Login.svelte';
    import Registers from './pages/Registers.svelte';
    import NotFound from './pages/notFound.svelte';
</script>

<Route path="/" redirect="/articles" />
<Route path="/articles/*"><Articles/></Route>
<Route path="/login"><Login/></Route>
<Route path="/register"><Registers/></Route>
<Route fallback><NotFound/></Route> <!--이상 url 접속시-->
