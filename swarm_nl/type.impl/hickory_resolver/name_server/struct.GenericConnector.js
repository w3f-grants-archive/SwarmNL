(function() {var type_impls = {
"hickory_resolver":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GenericConnector%3CP%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hickory_resolver/name_server/connection_provider.rs.html#257-262\">source</a><a href=\"#impl-GenericConnector%3CP%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P: <a class=\"trait\" href=\"hickory_resolver/name_server/trait.RuntimeProvider.html\" title=\"trait hickory_resolver::name_server::RuntimeProvider\">RuntimeProvider</a>&gt; <a class=\"struct\" href=\"hickory_resolver/name_server/struct.GenericConnector.html\" title=\"struct hickory_resolver::name_server::GenericConnector\">GenericConnector</a>&lt;P&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/hickory_resolver/name_server/connection_provider.rs.html#259-261\">source</a><h4 class=\"code-header\">pub fn <a href=\"hickory_resolver/name_server/struct.GenericConnector.html#tymethod.new\" class=\"fn\">new</a>(runtime_provider: P) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Create a new instance.</p>\n</div></details></div></details>",0,"hickory_resolver::name_server::connection_provider::tokio_runtime::TokioConnectionProvider"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ConnectionProvider-for-GenericConnector%3CP%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hickory_resolver/name_server/connection_provider.rs.html#272-433\">source</a><a href=\"#impl-ConnectionProvider-for-GenericConnector%3CP%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P: <a class=\"trait\" href=\"hickory_resolver/name_server/trait.RuntimeProvider.html\" title=\"trait hickory_resolver::name_server::RuntimeProvider\">RuntimeProvider</a>&gt; <a class=\"trait\" href=\"hickory_resolver/name_server/trait.ConnectionProvider.html\" title=\"trait hickory_resolver::name_server::ConnectionProvider\">ConnectionProvider</a> for <a class=\"struct\" href=\"hickory_resolver/name_server/struct.GenericConnector.html\" title=\"struct hickory_resolver::name_server::GenericConnector\">GenericConnector</a>&lt;P&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Conn\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Conn\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"hickory_resolver/name_server/trait.ConnectionProvider.html#associatedtype.Conn\" class=\"associatedtype\">Conn</a> = <a class=\"struct\" href=\"hickory_resolver/name_server/struct.GenericConnection.html\" title=\"struct hickory_resolver::name_server::GenericConnection\">GenericConnection</a></h4></section></summary><div class='docblock'>The handle to the connect for sending DNS requests.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.FutureConn\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.FutureConn\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"hickory_resolver/name_server/trait.ConnectionProvider.html#associatedtype.FutureConn\" class=\"associatedtype\">FutureConn</a> = ConnectionFuture&lt;P&gt;</h4></section></summary><div class='docblock'>Ths future is responsible for spawning any background tasks as necessary.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.RuntimeProvider\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.RuntimeProvider\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"hickory_resolver/name_server/trait.ConnectionProvider.html#associatedtype.RuntimeProvider\" class=\"associatedtype\">RuntimeProvider</a> = P</h4></section></summary><div class='docblock'>Provider that handles the underlying I/O and timing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_connection\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hickory_resolver/name_server/connection_provider.rs.html#277-432\">source</a><a href=\"#method.new_connection\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hickory_resolver/name_server/trait.ConnectionProvider.html#tymethod.new_connection\" class=\"fn\">new_connection</a>(\n    &amp;self,\n    config: &amp;<a class=\"struct\" href=\"hickory_resolver/config/struct.NameServerConfig.html\" title=\"struct hickory_resolver::config::NameServerConfig\">NameServerConfig</a>,\n    options: &amp;<a class=\"struct\" href=\"hickory_resolver/config/struct.ResolverOpts.html\" title=\"struct hickory_resolver::config::ResolverOpts\">ResolverOpts</a>\n) -&gt; Self::<a class=\"associatedtype\" href=\"hickory_resolver/name_server/trait.ConnectionProvider.html#associatedtype.FutureConn\" title=\"type hickory_resolver::name_server::ConnectionProvider::FutureConn\">FutureConn</a></h4></section></summary><div class='docblock'>Create a new connection.</div></details></div></details>","ConnectionProvider","hickory_resolver::name_server::connection_provider::tokio_runtime::TokioConnectionProvider"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-GenericConnector%3CP%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hickory_resolver/name_server/connection_provider.rs.html#252\">source</a><a href=\"#impl-Clone-for-GenericConnector%3CP%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"hickory_resolver/name_server/trait.RuntimeProvider.html\" title=\"trait hickory_resolver::name_server::RuntimeProvider\">RuntimeProvider</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"hickory_resolver/name_server/struct.GenericConnector.html\" title=\"struct hickory_resolver::name_server::GenericConnector\">GenericConnector</a>&lt;P&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hickory_resolver/name_server/connection_provider.rs.html#252\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"hickory_resolver/name_server/struct.GenericConnector.html\" title=\"struct hickory_resolver::name_server::GenericConnector\">GenericConnector</a>&lt;P&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","hickory_resolver::name_server::connection_provider::tokio_runtime::TokioConnectionProvider"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-GenericConnector%3CP%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hickory_resolver/name_server/connection_provider.rs.html#264-270\">source</a><a href=\"#impl-Default-for-GenericConnector%3CP%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;P: <a class=\"trait\" href=\"hickory_resolver/name_server/trait.RuntimeProvider.html\" title=\"trait hickory_resolver::name_server::RuntimeProvider\">RuntimeProvider</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hickory_resolver/name_server/struct.GenericConnector.html\" title=\"struct hickory_resolver::name_server::GenericConnector\">GenericConnector</a>&lt;P&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hickory_resolver/name_server/connection_provider.rs.html#265-269\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; Self</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","hickory_resolver::name_server::connection_provider::tokio_runtime::TokioConnectionProvider"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()