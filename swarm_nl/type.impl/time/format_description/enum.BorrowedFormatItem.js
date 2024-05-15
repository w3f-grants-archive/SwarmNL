(function() {var type_impls = {
"time":[["<section id=\"impl-Parsable-for-BorrowedFormatItem%3C'_%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/time/parsing/parsable.rs.html#21\">source</a><a href=\"#impl-Parsable-for-BorrowedFormatItem%3C'_%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"time/parsing/trait.Parsable.html\" title=\"trait time::parsing::Parsable\">Parsable</a> for <a class=\"enum\" href=\"time/format_description/enum.BorrowedFormatItem.html\" title=\"enum time::format_description::BorrowedFormatItem\">BorrowedFormatItem</a>&lt;'_&gt;</h3></section>","Parsable","time::format_description::borrowed_format_item::FormatItem"],["<section id=\"impl-Formattable-for-BorrowedFormatItem%3C'_%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/time/formatting/formattable.rs.html#26\">source</a><a href=\"#impl-Formattable-for-BorrowedFormatItem%3C'_%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"time/formatting/trait.Formattable.html\" title=\"trait time::formatting::Formattable\">Formattable</a> for <a class=\"enum\" href=\"time/format_description/enum.BorrowedFormatItem.html\" title=\"enum time::format_description::BorrowedFormatItem\">BorrowedFormatItem</a>&lt;'_&gt;</h3></section>","Formattable","time::format_description::borrowed_format_item::FormatItem"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq%3CComponent%3E-for-BorrowedFormatItem%3C'_%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/time/format_description/borrowed_format_item.rs.html#97-101\">source</a><a href=\"#impl-PartialEq%3CComponent%3E-for-BorrowedFormatItem%3C'_%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"enum\" href=\"time/format_description/enum.Component.html\" title=\"enum time::format_description::Component\">Component</a>&gt; for <a class=\"enum\" href=\"time/format_description/enum.BorrowedFormatItem.html\" title=\"enum time::format_description::BorrowedFormatItem\">BorrowedFormatItem</a>&lt;'_&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/time/format_description/borrowed_format_item.rs.html#98-100\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, rhs: &amp;<a class=\"enum\" href=\"time/format_description/enum.Component.html\" title=\"enum time::format_description::Component\">Component</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq<Component>","time::format_description::borrowed_format_item::FormatItem"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq%3C%26%5BBorrowedFormatItem%3C'_%3E%5D%3E-for-BorrowedFormatItem%3C'_%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/time/format_description/borrowed_format_item.rs.html#109-113\">source</a><a href=\"#impl-PartialEq%3C%26%5BBorrowedFormatItem%3C'_%3E%5D%3E-for-BorrowedFormatItem%3C'_%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;&amp;[<a class=\"enum\" href=\"time/format_description/enum.BorrowedFormatItem.html\" title=\"enum time::format_description::BorrowedFormatItem\">BorrowedFormatItem</a>&lt;'_&gt;]&gt; for <a class=\"enum\" href=\"time/format_description/enum.BorrowedFormatItem.html\" title=\"enum time::format_description::BorrowedFormatItem\">BorrowedFormatItem</a>&lt;'_&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/time/format_description/borrowed_format_item.rs.html#110-112\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, rhs: &amp;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.slice.html\">[Self]</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq<&[BorrowedFormatItem<'_>]>","time::format_description::borrowed_format_item::FormatItem"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3C%26%5BBorrowedFormatItem%3C'_%3E%5D%3E-for-BorrowedFormatItem%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/time/format_description/borrowed_format_item.rs.html#80-84\">source</a><a href=\"#impl-From%3C%26%5BBorrowedFormatItem%3C'_%3E%5D%3E-for-BorrowedFormatItem%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a [<a class=\"enum\" href=\"time/format_description/enum.BorrowedFormatItem.html\" title=\"enum time::format_description::BorrowedFormatItem\">BorrowedFormatItem</a>&lt;'_&gt;]&gt; for <a class=\"enum\" href=\"time/format_description/enum.BorrowedFormatItem.html\" title=\"enum time::format_description::BorrowedFormatItem\">BorrowedFormatItem</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/time/format_description/borrowed_format_item.rs.html#81-83\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(items: &amp;'a [<a class=\"enum\" href=\"time/format_description/enum.BorrowedFormatItem.html\" title=\"enum time::format_description::BorrowedFormatItem\">BorrowedFormatItem</a>&lt;'_&gt;]) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<&'a [BorrowedFormatItem<'_>]>","time::format_description::borrowed_format_item::FormatItem"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-BorrowedFormatItem%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/time/format_description/borrowed_format_item.rs.html#27\">source</a><a href=\"#impl-Clone-for-BorrowedFormatItem%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"time/format_description/enum.BorrowedFormatItem.html\" title=\"enum time::format_description::BorrowedFormatItem\">BorrowedFormatItem</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/time/format_description/borrowed_format_item.rs.html#27\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"enum\" href=\"time/format_description/enum.BorrowedFormatItem.html\" title=\"enum time::format_description::BorrowedFormatItem\">BorrowedFormatItem</a>&lt;'a&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","time::format_description::borrowed_format_item::FormatItem"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-BorrowedFormatItem%3C'_%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/time/format_description/borrowed_format_item.rs.html#51-61\">source</a><a href=\"#impl-Debug-for-BorrowedFormatItem%3C'_%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"time/format_description/enum.BorrowedFormatItem.html\" title=\"enum time::format_description::BorrowedFormatItem\">BorrowedFormatItem</a>&lt;'_&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/time/format_description/borrowed_format_item.rs.html#52-60\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","time::format_description::borrowed_format_item::FormatItem"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-BorrowedFormatItem%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/time/format_description/borrowed_format_item.rs.html#27\">source</a><a href=\"#impl-PartialEq-for-BorrowedFormatItem%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"enum\" href=\"time/format_description/enum.BorrowedFormatItem.html\" title=\"enum time::format_description::BorrowedFormatItem\">BorrowedFormatItem</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/time/format_description/borrowed_format_item.rs.html#27\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"enum\" href=\"time/format_description/enum.BorrowedFormatItem.html\" title=\"enum time::format_description::BorrowedFormatItem\">BorrowedFormatItem</a>&lt;'a&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","time::format_description::borrowed_format_item::FormatItem"],["<section id=\"impl-StructuralPartialEq-for-BorrowedFormatItem%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/time/format_description/borrowed_format_item.rs.html#27\">source</a><a href=\"#impl-StructuralPartialEq-for-BorrowedFormatItem%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"time/format_description/enum.BorrowedFormatItem.html\" title=\"enum time::format_description::BorrowedFormatItem\">BorrowedFormatItem</a>&lt;'a&gt;</h3></section>","StructuralPartialEq","time::format_description::borrowed_format_item::FormatItem"],["<section id=\"impl-Eq-for-BorrowedFormatItem%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/time/format_description/borrowed_format_item.rs.html#27\">source</a><a href=\"#impl-Eq-for-BorrowedFormatItem%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"enum\" href=\"time/format_description/enum.BorrowedFormatItem.html\" title=\"enum time::format_description::BorrowedFormatItem\">BorrowedFormatItem</a>&lt;'a&gt;</h3></section>","Eq","time::format_description::borrowed_format_item::FormatItem"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CComponent%3E-for-BorrowedFormatItem%3C'_%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/time/format_description/borrowed_format_item.rs.html#63-67\">source</a><a href=\"#impl-From%3CComponent%3E-for-BorrowedFormatItem%3C'_%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"time/format_description/enum.Component.html\" title=\"enum time::format_description::Component\">Component</a>&gt; for <a class=\"enum\" href=\"time/format_description/enum.BorrowedFormatItem.html\" title=\"enum time::format_description::BorrowedFormatItem\">BorrowedFormatItem</a>&lt;'_&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/time/format_description/borrowed_format_item.rs.html#64-66\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(component: <a class=\"enum\" href=\"time/format_description/enum.Component.html\" title=\"enum time::format_description::Component\">Component</a>) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Component>","time::format_description::borrowed_format_item::FormatItem"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()