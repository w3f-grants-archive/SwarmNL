(function() {var type_impls = {
"der_parser":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Error\" class=\"impl\"><a class=\"src rightside\" href=\"src/asn1_rs/error.rs.html#108\">source</a><a href=\"#impl-Error\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"enum\" href=\"der_parser/error/enum.Error.html\" title=\"enum der_parser::error::Error\">Error</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.invalid_value\" class=\"method\"><a class=\"src rightside\" href=\"src/asn1_rs/error.rs.html#111\">source</a><h4 class=\"code-header\">pub const fn <a href=\"der_parser/error/enum.Error.html#tymethod.invalid_value\" class=\"fn\">invalid_value</a>(tag: <a class=\"struct\" href=\"der_parser/der/struct.Tag.html\" title=\"struct der_parser::der::Tag\">Tag</a>, msg: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>) -&gt; <a class=\"enum\" href=\"der_parser/error/enum.Error.html\" title=\"enum der_parser::error::Error\">Error</a></h4></section></summary><div class=\"docblock\"><p>Build an error from the provided invalid value</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.unexpected_class\" class=\"method\"><a class=\"src rightside\" href=\"src/asn1_rs/error.rs.html#117\">source</a><h4 class=\"code-header\">pub const fn <a href=\"der_parser/error/enum.Error.html#tymethod.unexpected_class\" class=\"fn\">unexpected_class</a>(expected: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"der_parser/der/enum.Class.html\" title=\"enum der_parser::der::Class\">Class</a>&gt;, actual: <a class=\"enum\" href=\"der_parser/der/enum.Class.html\" title=\"enum der_parser::der::Class\">Class</a>) -&gt; <a class=\"enum\" href=\"der_parser/error/enum.Error.html\" title=\"enum der_parser::error::Error\">Error</a></h4></section></summary><div class=\"docblock\"><p>Build an error from the provided unexpected class</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.unexpected_tag\" class=\"method\"><a class=\"src rightside\" href=\"src/asn1_rs/error.rs.html#123\">source</a><h4 class=\"code-header\">pub const fn <a href=\"der_parser/error/enum.Error.html#tymethod.unexpected_tag\" class=\"fn\">unexpected_tag</a>(expected: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"der_parser/der/struct.Tag.html\" title=\"struct der_parser::der::Tag\">Tag</a>&gt;, actual: <a class=\"struct\" href=\"der_parser/der/struct.Tag.html\" title=\"struct der_parser::der::Tag\">Tag</a>) -&gt; <a class=\"enum\" href=\"der_parser/error/enum.Error.html\" title=\"enum der_parser::error::Error\">Error</a></h4></section></summary><div class=\"docblock\"><p>Build an error from the provided unexpected tag</p>\n</div></details></div></details>",0,"der_parser::error::BerError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Error\" class=\"impl\"><a class=\"src rightside\" href=\"src/asn1_rs/error.rs.html#50\">source</a><a href=\"#impl-Debug-for-Error\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"der_parser/error/enum.Error.html\" title=\"enum der_parser::error::Error\">Error</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/asn1_rs/error.rs.html#50\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","der_parser::error::BerError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FromExternalError%3CI,+E%3E-for-Error\" class=\"impl\"><a class=\"src rightside\" href=\"src/asn1_rs/error.rs.html#170\">source</a><a href=\"#impl-FromExternalError%3CI,+E%3E-for-Error\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I, E&gt; <a class=\"trait\" href=\"nom/error/trait.FromExternalError.html\" title=\"trait nom::error::FromExternalError\">FromExternalError</a>&lt;I, E&gt; for <a class=\"enum\" href=\"der_parser/error/enum.Error.html\" title=\"enum der_parser::error::Error\">Error</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_external_error\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/asn1_rs/error.rs.html#171\">source</a><a href=\"#method.from_external_error\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"nom/error/trait.FromExternalError.html#tymethod.from_external_error\" class=\"fn\">from_external_error</a>(_input: I, kind: <a class=\"enum\" href=\"nom/error/enum.ErrorKind.html\" title=\"enum nom::error::ErrorKind\">ErrorKind</a>, _e: E) -&gt; <a class=\"enum\" href=\"der_parser/error/enum.Error.html\" title=\"enum der_parser::error::Error\">Error</a></h4></section></summary><div class='docblock'>Creates a new error from an input position, an <a href=\"nom/error/enum.ErrorKind.html\" title=\"enum nom::error::ErrorKind\">ErrorKind</a> indicating the\nwrapping parser, and an external error</div></details></div></details>","FromExternalError<I, E>","der_parser::error::BerError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CFromUtf8Error%3E-for-Error\" class=\"impl\"><a class=\"src rightside\" href=\"src/asn1_rs/error.rs.html#149\">source</a><a href=\"#impl-From%3CFromUtf8Error%3E-for-Error\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/string/struct.FromUtf8Error.html\" title=\"struct alloc::string::FromUtf8Error\">FromUtf8Error</a>&gt; for <a class=\"enum\" href=\"der_parser/error/enum.Error.html\" title=\"enum der_parser::error::Error\">Error</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/asn1_rs/error.rs.html#150\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(_: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/string/struct.FromUtf8Error.html\" title=\"struct alloc::string::FromUtf8Error\">FromUtf8Error</a>) -&gt; <a class=\"enum\" href=\"der_parser/error/enum.Error.html\" title=\"enum der_parser::error::Error\">Error</a></h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<FromUtf8Error>","der_parser::error::BerError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CErr%3CError%3E%3E-for-Error\" class=\"impl\"><a class=\"src rightside\" href=\"src/asn1_rs/error.rs.html#161\">source</a><a href=\"#impl-From%3CErr%3CError%3E%3E-for-Error\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"nom/internal/enum.Err.html\" title=\"enum nom::internal::Err\">Err</a>&lt;<a class=\"enum\" href=\"der_parser/error/enum.Error.html\" title=\"enum der_parser::error::Error\">Error</a>&gt;&gt; for <a class=\"enum\" href=\"der_parser/error/enum.Error.html\" title=\"enum der_parser::error::Error\">Error</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/asn1_rs/error.rs.html#162\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(e: <a class=\"enum\" href=\"nom/internal/enum.Err.html\" title=\"enum nom::internal::Err\">Err</a>&lt;<a class=\"enum\" href=\"der_parser/error/enum.Error.html\" title=\"enum der_parser::error::Error\">Error</a>&gt;) -&gt; <a class=\"enum\" href=\"der_parser/error/enum.Error.html\" title=\"enum der_parser::error::Error\">Error</a></h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Err<Error>>","der_parser::error::BerError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CFromUtf16Error%3E-for-Error\" class=\"impl\"><a class=\"src rightside\" href=\"src/asn1_rs/error.rs.html#155\">source</a><a href=\"#impl-From%3CFromUtf16Error%3E-for-Error\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/string/struct.FromUtf16Error.html\" title=\"struct alloc::string::FromUtf16Error\">FromUtf16Error</a>&gt; for <a class=\"enum\" href=\"der_parser/error/enum.Error.html\" title=\"enum der_parser::error::Error\">Error</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/asn1_rs/error.rs.html#156\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(_: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/string/struct.FromUtf16Error.html\" title=\"struct alloc::string::FromUtf16Error\">FromUtf16Error</a>) -&gt; <a class=\"enum\" href=\"der_parser/error/enum.Error.html\" title=\"enum der_parser::error::Error\">Error</a></h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<FromUtf16Error>","der_parser::error::BerError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CUtf8Error%3E-for-Error\" class=\"impl\"><a class=\"src rightside\" href=\"src/asn1_rs/error.rs.html#143\">source</a><a href=\"#impl-From%3CUtf8Error%3E-for-Error\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/str/error/struct.Utf8Error.html\" title=\"struct core::str::error::Utf8Error\">Utf8Error</a>&gt; for <a class=\"enum\" href=\"der_parser/error/enum.Error.html\" title=\"enum der_parser::error::Error\">Error</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/asn1_rs/error.rs.html#144\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(_: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/str/error/struct.Utf8Error.html\" title=\"struct core::str::error::Utf8Error\">Utf8Error</a>) -&gt; <a class=\"enum\" href=\"der_parser/error/enum.Error.html\" title=\"enum der_parser::error::Error\">Error</a></h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Utf8Error>","der_parser::error::BerError"],["<section id=\"impl-StructuralPartialEq-for-Error\" class=\"impl\"><a class=\"src rightside\" href=\"src/asn1_rs/error.rs.html#50\">source</a><a href=\"#impl-StructuralPartialEq-for-Error\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"der_parser/error/enum.Error.html\" title=\"enum der_parser::error::Error\">Error</a></h3></section>","StructuralPartialEq","der_parser::error::BerError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-Error\" class=\"impl\"><a class=\"src rightside\" href=\"src/asn1_rs/error.rs.html#50\">source</a><a href=\"#impl-Display-for-Error\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"der_parser/error/enum.Error.html\" title=\"enum der_parser::error::Error\">Error</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/asn1_rs/error.rs.html#50\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, formatter: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","der_parser::error::BerError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ParseError%3C%26%5Bu8%5D%3E-for-Error\" class=\"impl\"><a class=\"src rightside\" href=\"src/asn1_rs/error.rs.html#128\">source</a><a href=\"#impl-ParseError%3C%26%5Bu8%5D%3E-for-Error\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"nom/error/trait.ParseError.html\" title=\"trait nom::error::ParseError\">ParseError</a>&lt;&amp;'a [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"enum\" href=\"der_parser/error/enum.Error.html\" title=\"enum der_parser::error::Error\">Error</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_error_kind\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/asn1_rs/error.rs.html#129\">source</a><a href=\"#method.from_error_kind\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"nom/error/trait.ParseError.html#tymethod.from_error_kind\" class=\"fn\">from_error_kind</a>(_input: &amp;'a [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>], kind: <a class=\"enum\" href=\"nom/error/enum.ErrorKind.html\" title=\"enum nom::error::ErrorKind\">ErrorKind</a>) -&gt; <a class=\"enum\" href=\"der_parser/error/enum.Error.html\" title=\"enum der_parser::error::Error\">Error</a></h4></section></summary><div class='docblock'>Creates an error from the input position and an <a href=\"nom/error/enum.ErrorKind.html\" title=\"enum nom::error::ErrorKind\">ErrorKind</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.append\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/asn1_rs/error.rs.html#132\">source</a><a href=\"#method.append\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"nom/error/trait.ParseError.html#tymethod.append\" class=\"fn\">append</a>(_input: &amp;'a [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>], kind: <a class=\"enum\" href=\"nom/error/enum.ErrorKind.html\" title=\"enum nom::error::ErrorKind\">ErrorKind</a>, _other: <a class=\"enum\" href=\"der_parser/error/enum.Error.html\" title=\"enum der_parser::error::Error\">Error</a>) -&gt; <a class=\"enum\" href=\"der_parser/error/enum.Error.html\" title=\"enum der_parser::error::Error\">Error</a></h4></section></summary><div class='docblock'>Combines an existing error with a new one created from the input\nposition and an <a href=\"nom/error/enum.ErrorKind.html\" title=\"enum nom::error::ErrorKind\">ErrorKind</a>. This is useful when backtracking\nthrough a parse tree, accumulating error context on the way</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_char\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nom/error.rs.html#26\">source</a><a href=\"#method.from_char\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"nom/error/trait.ParseError.html#method.from_char\" class=\"fn\">from_char</a>(input: I, _: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.char.html\">char</a>) -&gt; Self</h4></section></summary><div class='docblock'>Creates an error from an input position and an expected character</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.or\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/nom/error.rs.html#32\">source</a><a href=\"#method.or\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"nom/error/trait.ParseError.html#method.or\" class=\"fn\">or</a>(self, other: Self) -&gt; Self</h4></section></summary><div class='docblock'>Combines two existing errors. This function is used to compare errors\ngenerated in various branches of <code>alt</code>.</div></details></div></details>","ParseError<&'a [u8]>","der_parser::error::BerError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Error-for-Error\" class=\"impl\"><a class=\"src rightside\" href=\"src/asn1_rs/error.rs.html#46\">source</a><a href=\"#impl-Error-for-Error\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"der_parser/error/enum.Error.html\" title=\"enum der_parser::error::Error\">Error</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.source\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.30.0\">1.30.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/error.rs.html#84\">source</a></span><a href=\"#method.source\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/error/trait.Error.html#method.source\" class=\"fn\">source</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;(dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> + 'static)&gt;</h4></section></summary><div class='docblock'>The lower-level source of this error, if any. <a href=\"https://doc.rust-lang.org/1.77.0/core/error/trait.Error.html#method.source\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.description\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/error.rs.html#110\">source</a></span><a href=\"#method.description\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/error/trait.Error.html#method.description\" class=\"fn\">description</a>(&amp;self) -&gt; &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.str.html\">str</a></h4></section></summary><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated since 1.42.0: use the Display impl or to_string()</span></div></span><div class='docblock'> <a href=\"https://doc.rust-lang.org/1.77.0/core/error/trait.Error.html#method.description\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.cause\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/error.rs.html#120\">source</a></span><a href=\"#method.cause\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/error/trait.Error.html#method.cause\" class=\"fn\">cause</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a>&gt;</h4></section></summary><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated since 1.33.0: replaced by Error::source, which can support downcasting</span></div></span></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.provide\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/1.77.0/src/core/error.rs.html#184\">source</a><a href=\"#method.provide\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/error/trait.Error.html#method.provide\" class=\"fn\">provide</a>&lt;'a&gt;(&amp;'a self, request: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/error/struct.Request.html\" title=\"struct core::error::Request\">Request</a>&lt;'a&gt;)</h4></section></summary><span class=\"item-info\"><div class=\"stab unstable\"><span class=\"emoji\">🔬</span><span>This is a nightly-only experimental API. (<code>error_generic_member_access</code>)</span></div></span><div class='docblock'>Provides type based access to context intended for error reports. <a href=\"https://doc.rust-lang.org/1.77.0/core/error/trait.Error.html#method.provide\">Read more</a></div></details></div></details>","Error","der_parser::error::BerError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Error\" class=\"impl\"><a class=\"src rightside\" href=\"src/asn1_rs/error.rs.html#50\">source</a><a href=\"#impl-PartialEq-for-Error\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"enum\" href=\"der_parser/error/enum.Error.html\" title=\"enum der_parser::error::Error\">Error</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/asn1_rs/error.rs.html#50\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"enum\" href=\"der_parser/error/enum.Error.html\" title=\"enum der_parser::error::Error\">Error</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","der_parser::error::BerError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Error\" class=\"impl\"><a class=\"src rightside\" href=\"src/asn1_rs/error.rs.html#50\">source</a><a href=\"#impl-Clone-for-Error\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"der_parser/error/enum.Error.html\" title=\"enum der_parser::error::Error\">Error</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/asn1_rs/error.rs.html#50\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"enum\" href=\"der_parser/error/enum.Error.html\" title=\"enum der_parser::error::Error\">Error</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","der_parser::error::BerError"],["<section id=\"impl-Eq-for-Error\" class=\"impl\"><a class=\"src rightside\" href=\"src/asn1_rs/error.rs.html#50\">source</a><a href=\"#impl-Eq-for-Error\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"enum\" href=\"der_parser/error/enum.Error.html\" title=\"enum der_parser::error::Error\">Error</a></h3></section>","Eq","der_parser::error::BerError"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()