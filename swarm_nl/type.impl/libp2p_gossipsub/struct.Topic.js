(function() {var type_impls = {
"libp2p_gossipsub":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Topic%3CH%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/libp2p_gossipsub/topic.rs.html#100-111\">source</a><a href=\"#impl-Topic%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H: <a class=\"trait\" href=\"libp2p_gossipsub/trait.Hasher.html\" title=\"trait libp2p_gossipsub::Hasher\">Hasher</a>&gt; <a class=\"struct\" href=\"libp2p_gossipsub/struct.Topic.html\" title=\"struct libp2p_gossipsub::Topic\">Topic</a>&lt;H&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/libp2p_gossipsub/topic.rs.html#101-106\">source</a><h4 class=\"code-header\">pub fn <a href=\"libp2p_gossipsub/struct.Topic.html#tymethod.new\" class=\"fn\">new</a>(topic: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;) -&gt; Self</h4></section><section id=\"method.hash\" class=\"method\"><a class=\"src rightside\" href=\"src/libp2p_gossipsub/topic.rs.html#108-110\">source</a><h4 class=\"code-header\">pub fn <a href=\"libp2p_gossipsub/struct.Topic.html#tymethod.hash\" class=\"fn\">hash</a>(&amp;self) -&gt; <a class=\"struct\" href=\"libp2p_gossipsub/struct.TopicHash.html\" title=\"struct libp2p_gossipsub::TopicHash\">TopicHash</a></h4></section></div></details>",0,"libp2p_gossipsub::IdentTopic","libp2p_gossipsub::Sha256Topic"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Topic%3CH%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/libp2p_gossipsub/topic.rs.html#88\">source</a><a href=\"#impl-Clone-for-Topic%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"libp2p_gossipsub/trait.Hasher.html\" title=\"trait libp2p_gossipsub::Hasher\">Hasher</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"libp2p_gossipsub/struct.Topic.html\" title=\"struct libp2p_gossipsub::Topic\">Topic</a>&lt;H&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libp2p_gossipsub/topic.rs.html#88\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"libp2p_gossipsub/struct.Topic.html\" title=\"struct libp2p_gossipsub::Topic\">Topic</a>&lt;H&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","libp2p_gossipsub::IdentTopic","libp2p_gossipsub::Sha256Topic"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Topic%3CH%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/libp2p_gossipsub/topic.rs.html#88\">source</a><a href=\"#impl-PartialEq-for-Topic%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"libp2p_gossipsub/trait.Hasher.html\" title=\"trait libp2p_gossipsub::Hasher\">Hasher</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"libp2p_gossipsub/struct.Topic.html\" title=\"struct libp2p_gossipsub::Topic\">Topic</a>&lt;H&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libp2p_gossipsub/topic.rs.html#88\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"libp2p_gossipsub/struct.Topic.html\" title=\"struct libp2p_gossipsub::Topic\">Topic</a>&lt;H&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","libp2p_gossipsub::IdentTopic","libp2p_gossipsub::Sha256Topic"],["<section id=\"impl-StructuralPartialEq-for-Topic%3CH%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/libp2p_gossipsub/topic.rs.html#88\">source</a><a href=\"#impl-StructuralPartialEq-for-Topic%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H: <a class=\"trait\" href=\"libp2p_gossipsub/trait.Hasher.html\" title=\"trait libp2p_gossipsub::Hasher\">Hasher</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"libp2p_gossipsub/struct.Topic.html\" title=\"struct libp2p_gossipsub::Topic\">Topic</a>&lt;H&gt;</h3></section>","StructuralPartialEq","libp2p_gossipsub::IdentTopic","libp2p_gossipsub::Sha256Topic"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-Topic%3CH%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/libp2p_gossipsub/topic.rs.html#113-117\">source</a><a href=\"#impl-Display-for-Topic%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H: <a class=\"trait\" href=\"libp2p_gossipsub/trait.Hasher.html\" title=\"trait libp2p_gossipsub::Hasher\">Hasher</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"libp2p_gossipsub/struct.Topic.html\" title=\"struct libp2p_gossipsub::Topic\">Topic</a>&lt;H&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libp2p_gossipsub/topic.rs.html#114-116\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","libp2p_gossipsub::IdentTopic","libp2p_gossipsub::Sha256Topic"],["<section id=\"impl-Eq-for-Topic%3CH%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/libp2p_gossipsub/topic.rs.html#88\">source</a><a href=\"#impl-Eq-for-Topic%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"libp2p_gossipsub/trait.Hasher.html\" title=\"trait libp2p_gossipsub::Hasher\">Hasher</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"libp2p_gossipsub/struct.Topic.html\" title=\"struct libp2p_gossipsub::Topic\">Topic</a>&lt;H&gt;</h3></section>","Eq","libp2p_gossipsub::IdentTopic","libp2p_gossipsub::Sha256Topic"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialOrd-for-Topic%3CH%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/libp2p_gossipsub/topic.rs.html#88\">source</a><a href=\"#impl-PartialOrd-for-Topic%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a> + <a class=\"trait\" href=\"libp2p_gossipsub/trait.Hasher.html\" title=\"trait libp2p_gossipsub::Hasher\">Hasher</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a> for <a class=\"struct\" href=\"libp2p_gossipsub/struct.Topic.html\" title=\"struct libp2p_gossipsub::Topic\">Topic</a>&lt;H&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.partial_cmp\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libp2p_gossipsub/topic.rs.html#88\">source</a><a href=\"#method.partial_cmp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp\" class=\"fn\">partial_cmp</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"libp2p_gossipsub/struct.Topic.html\" title=\"struct libp2p_gossipsub::Topic\">Topic</a>&lt;H&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\">Ordering</a>&gt;</h4></section></summary><div class='docblock'>This method returns an ordering between <code>self</code> and <code>other</code> values if one exists. <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.lt\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/cmp.rs.html#1127\">source</a></span><a href=\"#method.lt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialOrd.html#method.lt\" class=\"fn\">lt</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests less than (for <code>self</code> and <code>other</code>) and is used by the <code>&lt;</code> operator. <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialOrd.html#method.lt\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.le\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/cmp.rs.html#1144\">source</a></span><a href=\"#method.le\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialOrd.html#method.le\" class=\"fn\">le</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests less than or equal to (for <code>self</code> and <code>other</code>) and is used by the <code>&lt;=</code>\noperator. <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialOrd.html#method.le\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.gt\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/cmp.rs.html#1160\">source</a></span><a href=\"#method.gt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialOrd.html#method.gt\" class=\"fn\">gt</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests greater than (for <code>self</code> and <code>other</code>) and is used by the <code>&gt;</code> operator. <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialOrd.html#method.gt\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ge\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/cmp.rs.html#1177\">source</a></span><a href=\"#method.ge\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialOrd.html#method.ge\" class=\"fn\">ge</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests greater than or equal to (for <code>self</code> and <code>other</code>) and is used by the <code>&gt;=</code>\noperator. <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialOrd.html#method.ge\">Read more</a></div></details></div></details>","PartialOrd","libp2p_gossipsub::IdentTopic","libp2p_gossipsub::Sha256Topic"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Ord-for-Topic%3CH%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/libp2p_gossipsub/topic.rs.html#88\">source</a><a href=\"#impl-Ord-for-Topic%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + <a class=\"trait\" href=\"libp2p_gossipsub/trait.Hasher.html\" title=\"trait libp2p_gossipsub::Hasher\">Hasher</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"libp2p_gossipsub/struct.Topic.html\" title=\"struct libp2p_gossipsub::Topic\">Topic</a>&lt;H&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.cmp\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libp2p_gossipsub/topic.rs.html#88\">source</a><a href=\"#method.cmp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Ord.html#tymethod.cmp\" class=\"fn\">cmp</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"libp2p_gossipsub/struct.Topic.html\" title=\"struct libp2p_gossipsub::Topic\">Topic</a>&lt;H&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\">Ordering</a></h4></section></summary><div class='docblock'>This method returns an <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\"><code>Ordering</code></a> between <code>self</code> and <code>other</code>. <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Ord.html#tymethod.cmp\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.max\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.21.0\">1.21.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/cmp.rs.html#830-832\">source</a></span><a href=\"#method.max\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Ord.html#method.max\" class=\"fn\">max</a>(self, other: Self) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Compares and returns the maximum of two values. <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Ord.html#method.max\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.min\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.21.0\">1.21.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/cmp.rs.html#850-852\">source</a></span><a href=\"#method.min\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Ord.html#method.min\" class=\"fn\">min</a>(self, other: Self) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Compares and returns the minimum of two values. <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Ord.html#method.min\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clamp\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.50.0\">1.50.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/cmp.rs.html#875-878\">source</a></span><a href=\"#method.clamp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Ord.html#method.clamp\" class=\"fn\">clamp</a>(self, min: Self, max: Self) -&gt; Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>,</div></h4></section></summary><div class='docblock'>Restrict a value to a certain interval. <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Ord.html#method.clamp\">Read more</a></div></details></div></details>","Ord","libp2p_gossipsub::IdentTopic","libp2p_gossipsub::Sha256Topic"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Topic%3CH%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/libp2p_gossipsub/topic.rs.html#88\">source</a><a href=\"#impl-Debug-for-Topic%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"libp2p_gossipsub/trait.Hasher.html\" title=\"trait libp2p_gossipsub::Hasher\">Hasher</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"libp2p_gossipsub/struct.Topic.html\" title=\"struct libp2p_gossipsub::Topic\">Topic</a>&lt;H&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libp2p_gossipsub/topic.rs.html#88\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","libp2p_gossipsub::IdentTopic","libp2p_gossipsub::Sha256Topic"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()