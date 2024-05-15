(function() {var type_impls = {
"hickory_resolver":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AsyncResolver%3CR%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hickory_resolver/async_resolver.rs.html#139-178\">source</a><a href=\"#impl-AsyncResolver%3CR%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R: <a class=\"trait\" href=\"hickory_resolver/name_server/trait.ConnectionProvider.html\" title=\"trait hickory_resolver::name_server::ConnectionProvider\">ConnectionProvider</a>&gt; <a class=\"struct\" href=\"hickory_resolver/struct.AsyncResolver.html\" title=\"struct hickory_resolver::AsyncResolver\">AsyncResolver</a>&lt;R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/hickory_resolver/async_resolver.rs.html#155-157\">source</a><h4 class=\"code-header\">pub fn <a href=\"hickory_resolver/struct.AsyncResolver.html#tymethod.new\" class=\"fn\">new</a>(config: <a class=\"struct\" href=\"hickory_resolver/config/struct.ResolverConfig.html\" title=\"struct hickory_resolver::config::ResolverConfig\">ResolverConfig</a>, options: <a class=\"struct\" href=\"hickory_resolver/config/struct.ResolverOpts.html\" title=\"struct hickory_resolver::config::ResolverOpts\">ResolverOpts</a>, provider: R) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Construct a new generic <code>AsyncResolver</code> with the provided configuration.</p>\n<p>see [TokioAsyncResolver::tokio(..)] instead.</p>\n<h5 id=\"arguments\"><a class=\"doc-anchor\" href=\"#arguments\">§</a>Arguments</h5>\n<ul>\n<li><code>config</code> - configuration, name_servers, etc. for the Resolver</li>\n<li><code>options</code> - basic lookup options for the resolver</li>\n</ul>\n<h5 id=\"returns\"><a class=\"doc-anchor\" href=\"#returns\">§</a>Returns</h5>\n<p>A tuple containing the new <code>AsyncResolver</code> and a future that drives the\nbackground task that runs resolutions for the <code>AsyncResolver</code>. See the\ndocumentation for <code>AsyncResolver</code> for more information on how to use\nthe background future.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_system_conf\" class=\"method\"><a class=\"src rightside\" href=\"src/hickory_resolver/async_resolver.rs.html#170-172\">source</a><h4 class=\"code-header\">pub fn <a href=\"hickory_resolver/struct.AsyncResolver.html#tymethod.from_system_conf\" class=\"fn\">from_system_conf</a>(runtime: R) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"struct\" href=\"hickory_resolver/error/struct.ResolveError.html\" title=\"struct hickory_resolver::error::ResolveError\">ResolveError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Constructs a new Resolver with the system configuration.</p>\n<p>see [TokioAsyncResolver::tokio_from_system_conf(..)] instead.</p>\n<p>This will use <code>/etc/resolv.conf</code> on Unix OSes and the registry on Windows.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clear_cache\" class=\"method\"><a class=\"src rightside\" href=\"src/hickory_resolver/async_resolver.rs.html#175-177\">source</a><h4 class=\"code-header\">pub fn <a href=\"hickory_resolver/struct.AsyncResolver.html#tymethod.clear_cache\" class=\"fn\">clear_cache</a>(&amp;self)</h4></section></summary><div class=\"docblock\"><p>Flushes/Removes all entries from the cache</p>\n</div></details></div></details>",0,"hickory_resolver::async_resolver::TokioAsyncResolver"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AsyncResolver%3CP%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hickory_resolver/async_resolver.rs.html#180-443\">source</a><a href=\"#impl-AsyncResolver%3CP%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P: <a class=\"trait\" href=\"hickory_resolver/name_server/trait.ConnectionProvider.html\" title=\"trait hickory_resolver::name_server::ConnectionProvider\">ConnectionProvider</a>&gt; <a class=\"struct\" href=\"hickory_resolver/struct.AsyncResolver.html\" title=\"struct hickory_resolver::AsyncResolver\">AsyncResolver</a>&lt;P&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_with_conn\" class=\"method\"><a class=\"src rightside\" href=\"src/hickory_resolver/async_resolver.rs.html#194-230\">source</a><h4 class=\"code-header\">pub fn <a href=\"hickory_resolver/struct.AsyncResolver.html#tymethod.new_with_conn\" class=\"fn\">new_with_conn</a>(\n    config: <a class=\"struct\" href=\"hickory_resolver/config/struct.ResolverConfig.html\" title=\"struct hickory_resolver::config::ResolverConfig\">ResolverConfig</a>,\n    options: <a class=\"struct\" href=\"hickory_resolver/config/struct.ResolverOpts.html\" title=\"struct hickory_resolver::config::ResolverOpts\">ResolverOpts</a>,\n    conn_provider: P\n) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Construct a new <code>AsyncResolver</code> with the provided configuration.</p>\n<h5 id=\"arguments\"><a class=\"doc-anchor\" href=\"#arguments\">§</a>Arguments</h5>\n<ul>\n<li><code>config</code> - configuration, name_servers, etc. for the Resolver</li>\n<li><code>options</code> - basic lookup options for the resolver</li>\n</ul>\n<h5 id=\"returns\"><a class=\"doc-anchor\" href=\"#returns\">§</a>Returns</h5>\n<p>A tuple containing the new <code>AsyncResolver</code> and a future that drives the\nbackground task that runs resolutions for the <code>AsyncResolver</code>. See the\ndocumentation for <code>AsyncResolver</code> for more information on how to use\nthe background future.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_system_conf_with_provider\" class=\"method\"><a class=\"src rightside\" href=\"src/hickory_resolver/async_resolver.rs.html#241-244\">source</a><h4 class=\"code-header\">pub fn <a href=\"hickory_resolver/struct.AsyncResolver.html#tymethod.from_system_conf_with_provider\" class=\"fn\">from_system_conf_with_provider</a>(\n    conn_provider: P\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"struct\" href=\"hickory_resolver/error/struct.ResolveError.html\" title=\"struct hickory_resolver::error::ResolveError\">ResolveError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Constructs a new Resolver with the system configuration.</p>\n<p>This will use <code>/etc/resolv.conf</code> on Unix OSes and the registry on Windows.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.lookup\" class=\"method\"><a class=\"src rightside\" href=\"src/hickory_resolver/async_resolver.rs.html#267-279\">source</a><h4 class=\"code-header\">pub async fn <a href=\"hickory_resolver/struct.AsyncResolver.html#tymethod.lookup\" class=\"fn\">lookup</a>&lt;N: <a class=\"trait\" href=\"hickory_resolver/trait.IntoName.html\" title=\"trait hickory_resolver::IntoName\">IntoName</a>&gt;(\n    &amp;self,\n    name: N,\n    record_type: <a class=\"enum\" href=\"hickory_proto/rr/record_type/enum.RecordType.html\" title=\"enum hickory_proto::rr::record_type::RecordType\">RecordType</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"hickory_resolver/lookup/struct.Lookup.html\" title=\"struct hickory_resolver::lookup::Lookup\">Lookup</a>, <a class=\"struct\" href=\"hickory_resolver/error/struct.ResolveError.html\" title=\"struct hickory_resolver::error::ResolveError\">ResolveError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Generic lookup for any RecordType</p>\n<p><em>WARNING</em> this interface may change in the future, see if one of the specializations would be better.</p>\n<h5 id=\"arguments-1\"><a class=\"doc-anchor\" href=\"#arguments-1\">§</a>Arguments</h5>\n<ul>\n<li><code>name</code> - name of the record to lookup, if name is not a valid domain name, an error will be returned</li>\n<li><code>record_type</code> - type of record to lookup, all RecordData responses will be filtered to this type</li>\n</ul>\n<h5 id=\"returns-1\"><a class=\"doc-anchor\" href=\"#returns-1\">§</a>Returns</h5></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.lookup_ip\" class=\"method\"><a class=\"src rightside\" href=\"src/hickory_resolver/async_resolver.rs.html#371-422\">source</a><h4 class=\"code-header\">pub async fn <a href=\"hickory_resolver/struct.AsyncResolver.html#tymethod.lookup_ip\" class=\"fn\">lookup_ip</a>&lt;N: <a class=\"trait\" href=\"hickory_resolver/trait.IntoName.html\" title=\"trait hickory_resolver::IntoName\">IntoName</a> + <a class=\"trait\" href=\"hickory_resolver/trait.TryParseIp.html\" title=\"trait hickory_resolver::TryParseIp\">TryParseIp</a>&gt;(\n    &amp;self,\n    host: N\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"hickory_resolver/lookup_ip/struct.LookupIp.html\" title=\"struct hickory_resolver::lookup_ip::LookupIp\">LookupIp</a>, <a class=\"struct\" href=\"hickory_resolver/error/struct.ResolveError.html\" title=\"struct hickory_resolver::error::ResolveError\">ResolveError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Performs a dual-stack DNS lookup for the IP for the given hostname.</p>\n<p>See the configuration and options parameters for controlling the way in which A(Ipv4) and AAAA(Ipv6) lookups will be performed. For the least expensive query a fully-qualified-domain-name, FQDN, which ends in a final <code>.</code>, e.g. <code>www.example.com.</code>, will only issue one query. Anything else will always incur the cost of querying the <code>ResolverConfig::domain</code> and <code>ResolverConfig::search</code>.</p>\n<h5 id=\"arguments-2\"><a class=\"doc-anchor\" href=\"#arguments-2\">§</a>Arguments</h5>\n<ul>\n<li><code>host</code> - string hostname, if this is an invalid hostname, an error will be returned.</li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_hosts\" class=\"method\"><a class=\"src rightside\" href=\"src/hickory_resolver/async_resolver.rs.html#425-427\">source</a><h4 class=\"code-header\">pub fn <a href=\"hickory_resolver/struct.AsyncResolver.html#tymethod.set_hosts\" class=\"fn\">set_hosts</a>(&amp;mut self, hosts: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"hickory_resolver/struct.Hosts.html\" title=\"struct hickory_resolver::Hosts\">Hosts</a>&gt;)</h4></section></summary><div class=\"docblock\"><p>Customizes the static hosts used in this resolver.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.reverse_lookup\" class=\"method\"><a class=\"src rightside\" href=\"src/hickory_resolver/async_resolver.rs.html#429-434\">source</a><h4 class=\"code-header\">pub async fn <a href=\"hickory_resolver/struct.AsyncResolver.html#tymethod.reverse_lookup\" class=\"fn\">reverse_lookup</a>(\n    &amp;self,\n    query: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/net/ip_addr/enum.IpAddr.html\" title=\"enum core::net::ip_addr::IpAddr\">IpAddr</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"hickory_resolver/lookup/struct.ReverseLookup.html\" title=\"struct hickory_resolver::lookup::ReverseLookup\">ReverseLookup</a>, <a class=\"struct\" href=\"hickory_resolver/error/struct.ResolveError.html\" title=\"struct hickory_resolver::error::ResolveError\">ResolveError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Performs a lookup for the associated type.</p>\n<h5 id=\"arguments-3\"><a class=\"doc-anchor\" href=\"#arguments-3\">§</a>Arguments</h5>\n<ul>\n<li><code>query</code> - a type which can be converted to <code>Name</code> via <code>From</code>.</li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ipv4_lookup\" class=\"method\"><a class=\"src rightside\" href=\"src/hickory_resolver/async_resolver.rs.html#435\">source</a><h4 class=\"code-header\">pub async fn <a href=\"hickory_resolver/struct.AsyncResolver.html#tymethod.ipv4_lookup\" class=\"fn\">ipv4_lookup</a>&lt;N: <a class=\"trait\" href=\"hickory_resolver/trait.IntoName.html\" title=\"trait hickory_resolver::IntoName\">IntoName</a>&gt;(\n    &amp;self,\n    query: N\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"hickory_resolver/lookup/struct.Ipv4Lookup.html\" title=\"struct hickory_resolver::lookup::Ipv4Lookup\">Ipv4Lookup</a>, <a class=\"struct\" href=\"hickory_resolver/error/struct.ResolveError.html\" title=\"struct hickory_resolver::error::ResolveError\">ResolveError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Performs a lookup for the associated type.</p>\n<p><em>hint</em> queries that end with a ‘.’ are fully qualified names and are cheaper lookups</p>\n<h5 id=\"arguments-4\"><a class=\"doc-anchor\" href=\"#arguments-4\">§</a>Arguments</h5>\n<ul>\n<li><code>query</code> - a string which parses to a domain name, failure to parse will return an error</li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ipv6_lookup\" class=\"method\"><a class=\"src rightside\" href=\"src/hickory_resolver/async_resolver.rs.html#436\">source</a><h4 class=\"code-header\">pub async fn <a href=\"hickory_resolver/struct.AsyncResolver.html#tymethod.ipv6_lookup\" class=\"fn\">ipv6_lookup</a>&lt;N: <a class=\"trait\" href=\"hickory_resolver/trait.IntoName.html\" title=\"trait hickory_resolver::IntoName\">IntoName</a>&gt;(\n    &amp;self,\n    query: N\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"hickory_resolver/lookup/struct.Ipv6Lookup.html\" title=\"struct hickory_resolver::lookup::Ipv6Lookup\">Ipv6Lookup</a>, <a class=\"struct\" href=\"hickory_resolver/error/struct.ResolveError.html\" title=\"struct hickory_resolver::error::ResolveError\">ResolveError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Performs a lookup for the associated type.</p>\n<p><em>hint</em> queries that end with a ‘.’ are fully qualified names and are cheaper lookups</p>\n<h5 id=\"arguments-5\"><a class=\"doc-anchor\" href=\"#arguments-5\">§</a>Arguments</h5>\n<ul>\n<li><code>query</code> - a string which parses to a domain name, failure to parse will return an error</li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.mx_lookup\" class=\"method\"><a class=\"src rightside\" href=\"src/hickory_resolver/async_resolver.rs.html#437\">source</a><h4 class=\"code-header\">pub async fn <a href=\"hickory_resolver/struct.AsyncResolver.html#tymethod.mx_lookup\" class=\"fn\">mx_lookup</a>&lt;N: <a class=\"trait\" href=\"hickory_resolver/trait.IntoName.html\" title=\"trait hickory_resolver::IntoName\">IntoName</a>&gt;(\n    &amp;self,\n    query: N\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"hickory_resolver/lookup/struct.MxLookup.html\" title=\"struct hickory_resolver::lookup::MxLookup\">MxLookup</a>, <a class=\"struct\" href=\"hickory_resolver/error/struct.ResolveError.html\" title=\"struct hickory_resolver::error::ResolveError\">ResolveError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Performs a lookup for the associated type.</p>\n<p><em>hint</em> queries that end with a ‘.’ are fully qualified names and are cheaper lookups</p>\n<h5 id=\"arguments-6\"><a class=\"doc-anchor\" href=\"#arguments-6\">§</a>Arguments</h5>\n<ul>\n<li><code>query</code> - a string which parses to a domain name, failure to parse will return an error</li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ns_lookup\" class=\"method\"><a class=\"src rightside\" href=\"src/hickory_resolver/async_resolver.rs.html#438\">source</a><h4 class=\"code-header\">pub async fn <a href=\"hickory_resolver/struct.AsyncResolver.html#tymethod.ns_lookup\" class=\"fn\">ns_lookup</a>&lt;N: <a class=\"trait\" href=\"hickory_resolver/trait.IntoName.html\" title=\"trait hickory_resolver::IntoName\">IntoName</a>&gt;(\n    &amp;self,\n    query: N\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"hickory_resolver/lookup/struct.NsLookup.html\" title=\"struct hickory_resolver::lookup::NsLookup\">NsLookup</a>, <a class=\"struct\" href=\"hickory_resolver/error/struct.ResolveError.html\" title=\"struct hickory_resolver::error::ResolveError\">ResolveError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Performs a lookup for the associated type.</p>\n<p><em>hint</em> queries that end with a ‘.’ are fully qualified names and are cheaper lookups</p>\n<h5 id=\"arguments-7\"><a class=\"doc-anchor\" href=\"#arguments-7\">§</a>Arguments</h5>\n<ul>\n<li><code>query</code> - a string which parses to a domain name, failure to parse will return an error</li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.soa_lookup\" class=\"method\"><a class=\"src rightside\" href=\"src/hickory_resolver/async_resolver.rs.html#439\">source</a><h4 class=\"code-header\">pub async fn <a href=\"hickory_resolver/struct.AsyncResolver.html#tymethod.soa_lookup\" class=\"fn\">soa_lookup</a>&lt;N: <a class=\"trait\" href=\"hickory_resolver/trait.IntoName.html\" title=\"trait hickory_resolver::IntoName\">IntoName</a>&gt;(\n    &amp;self,\n    query: N\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"hickory_resolver/lookup/struct.SoaLookup.html\" title=\"struct hickory_resolver::lookup::SoaLookup\">SoaLookup</a>, <a class=\"struct\" href=\"hickory_resolver/error/struct.ResolveError.html\" title=\"struct hickory_resolver::error::ResolveError\">ResolveError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Performs a lookup for the associated type.</p>\n<p><em>hint</em> queries that end with a ‘.’ are fully qualified names and are cheaper lookups</p>\n<h5 id=\"arguments-8\"><a class=\"doc-anchor\" href=\"#arguments-8\">§</a>Arguments</h5>\n<ul>\n<li><code>query</code> - a string which parses to a domain name, failure to parse will return an error</li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.srv_lookup\" class=\"method\"><a class=\"src rightside\" href=\"src/hickory_resolver/async_resolver.rs.html#440\">source</a><h4 class=\"code-header\">pub async fn <a href=\"hickory_resolver/struct.AsyncResolver.html#tymethod.srv_lookup\" class=\"fn\">srv_lookup</a>&lt;N: <a class=\"trait\" href=\"hickory_resolver/trait.IntoName.html\" title=\"trait hickory_resolver::IntoName\">IntoName</a>&gt;(\n    &amp;self,\n    query: N\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"hickory_resolver/lookup/struct.SrvLookup.html\" title=\"struct hickory_resolver::lookup::SrvLookup\">SrvLookup</a>, <a class=\"struct\" href=\"hickory_resolver/error/struct.ResolveError.html\" title=\"struct hickory_resolver::error::ResolveError\">ResolveError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Performs a lookup for the associated type.</p>\n<p><em>hint</em> queries that end with a ‘.’ are fully qualified names and are cheaper lookups</p>\n<h5 id=\"arguments-9\"><a class=\"doc-anchor\" href=\"#arguments-9\">§</a>Arguments</h5>\n<ul>\n<li><code>query</code> - a string which parses to a domain name, failure to parse will return an error</li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.tlsa_lookup\" class=\"method\"><a class=\"src rightside\" href=\"src/hickory_resolver/async_resolver.rs.html#441\">source</a><h4 class=\"code-header\">pub async fn <a href=\"hickory_resolver/struct.AsyncResolver.html#tymethod.tlsa_lookup\" class=\"fn\">tlsa_lookup</a>&lt;N: <a class=\"trait\" href=\"hickory_resolver/trait.IntoName.html\" title=\"trait hickory_resolver::IntoName\">IntoName</a>&gt;(\n    &amp;self,\n    query: N\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"hickory_resolver/lookup/struct.TlsaLookup.html\" title=\"struct hickory_resolver::lookup::TlsaLookup\">TlsaLookup</a>, <a class=\"struct\" href=\"hickory_resolver/error/struct.ResolveError.html\" title=\"struct hickory_resolver::error::ResolveError\">ResolveError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Performs a lookup for the associated type.</p>\n<p><em>hint</em> queries that end with a ‘.’ are fully qualified names and are cheaper lookups</p>\n<h5 id=\"arguments-10\"><a class=\"doc-anchor\" href=\"#arguments-10\">§</a>Arguments</h5>\n<ul>\n<li><code>query</code> - a string which parses to a domain name, failure to parse will return an error</li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.txt_lookup\" class=\"method\"><a class=\"src rightside\" href=\"src/hickory_resolver/async_resolver.rs.html#442\">source</a><h4 class=\"code-header\">pub async fn <a href=\"hickory_resolver/struct.AsyncResolver.html#tymethod.txt_lookup\" class=\"fn\">txt_lookup</a>&lt;N: <a class=\"trait\" href=\"hickory_resolver/trait.IntoName.html\" title=\"trait hickory_resolver::IntoName\">IntoName</a>&gt;(\n    &amp;self,\n    query: N\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"hickory_resolver/lookup/struct.TxtLookup.html\" title=\"struct hickory_resolver::lookup::TxtLookup\">TxtLookup</a>, <a class=\"struct\" href=\"hickory_resolver/error/struct.ResolveError.html\" title=\"struct hickory_resolver::error::ResolveError\">ResolveError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Performs a lookup for the associated type.</p>\n<p><em>hint</em> queries that end with a ‘.’ are fully qualified names and are cheaper lookups</p>\n<h5 id=\"arguments-11\"><a class=\"doc-anchor\" href=\"#arguments-11\">§</a>Arguments</h5>\n<ul>\n<li><code>query</code> - a string which parses to a domain name, failure to parse will return an error</li>\n</ul>\n</div></details></div></details>",0,"hickory_resolver::async_resolver::TokioAsyncResolver"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-AsyncResolver%3CP%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hickory_resolver/async_resolver.rs.html#59\">source</a><a href=\"#impl-Clone-for-AsyncResolver%3CP%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"hickory_resolver/name_server/trait.ConnectionProvider.html\" title=\"trait hickory_resolver::name_server::ConnectionProvider\">ConnectionProvider</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"hickory_resolver/struct.AsyncResolver.html\" title=\"struct hickory_resolver::AsyncResolver\">AsyncResolver</a>&lt;P&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hickory_resolver/async_resolver.rs.html#59\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"hickory_resolver/struct.AsyncResolver.html\" title=\"struct hickory_resolver::AsyncResolver\">AsyncResolver</a>&lt;P&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","hickory_resolver::async_resolver::TokioAsyncResolver"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-AsyncResolver%3CP%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hickory_resolver/async_resolver.rs.html#445-451\">source</a><a href=\"#impl-Debug-for-AsyncResolver%3CP%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P: <a class=\"trait\" href=\"hickory_resolver/name_server/trait.ConnectionProvider.html\" title=\"trait hickory_resolver::name_server::ConnectionProvider\">ConnectionProvider</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"hickory_resolver/struct.AsyncResolver.html\" title=\"struct hickory_resolver::AsyncResolver\">AsyncResolver</a>&lt;P&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hickory_resolver/async_resolver.rs.html#446-450\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","hickory_resolver::async_resolver::TokioAsyncResolver"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()