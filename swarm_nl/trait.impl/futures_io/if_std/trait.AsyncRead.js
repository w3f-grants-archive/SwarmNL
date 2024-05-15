(function() {var implementors = {
"async_fs":[["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"async_fs/struct.File.html\" title=\"struct async_fs::File\">File</a>"]],
"async_io":[["impl&lt;T&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for &amp;<a class=\"struct\" href=\"async_io/struct.Async.html\" title=\"struct async_io::Async\">Async</a>&lt;T&gt;<div class=\"where\">where\n    for&lt;'a&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;'a T</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,</div>"],["impl&lt;T: <a class=\"trait\" href=\"async_io/trait.IoSafe.html\" title=\"trait async_io::IoSafe\">IoSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"async_io/struct.Async.html\" title=\"struct async_io::Async\">Async</a>&lt;T&gt;"]],
"async_net":[["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"async_net/unix/struct.UnixStream.html\" title=\"struct async_net::unix::UnixStream\">UnixStream</a>"],["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"async_net/struct.TcpStream.html\" title=\"struct async_net::TcpStream\">TcpStream</a>"]],
"async_process":[["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"async_process/struct.ChildStdout.html\" title=\"struct async_process::ChildStdout\">ChildStdout</a>"],["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"async_process/struct.ChildStderr.html\" title=\"struct async_process::ChildStderr\">ChildStderr</a>"]],
"async_std":[["impl <a class=\"trait\" href=\"async_std/io/trait.Read.html\" title=\"trait async_std::io::Read\">AsyncRead</a> for <a class=\"struct\" href=\"async_std/io/struct.Stdin.html\" title=\"struct async_std::io::Stdin\">Stdin</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"async_std/io/trait.Read.html\" title=\"trait async_std::io::Read\">AsyncRead</a> for <a class=\"struct\" href=\"async_std/io/struct.Cursor.html\" title=\"struct async_std::io::Cursor\">Cursor</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</div>"],["impl <a class=\"trait\" href=\"async_std/io/trait.Read.html\" title=\"trait async_std::io::Read\">AsyncRead</a> for <a class=\"struct\" href=\"async_std/io/struct.Empty.html\" title=\"struct async_std::io::Empty\">Empty</a>"],["impl&lt;R: <a class=\"trait\" href=\"async_std/io/trait.Read.html\" title=\"trait async_std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"async_std/io/trait.Read.html\" title=\"trait async_std::io::Read\">AsyncRead</a> for <a class=\"struct\" href=\"async_std/io/struct.BufReader.html\" title=\"struct async_std::io::BufReader\">BufReader</a>&lt;R&gt;"],["impl <a class=\"trait\" href=\"async_std/io/trait.Read.html\" title=\"trait async_std::io::Read\">AsyncRead</a> for <a class=\"struct\" href=\"async_std/fs/struct.File.html\" title=\"struct async_std::fs::File\">File</a>"],["impl <a class=\"trait\" href=\"async_std/io/trait.Read.html\" title=\"trait async_std::io::Read\">AsyncRead</a> for &amp;<a class=\"struct\" href=\"async_std/os/unix/net/struct.UnixStream.html\" title=\"struct async_std::os::unix::net::UnixStream\">UnixStream</a>"],["impl&lt;T: <a class=\"trait\" href=\"async_std/io/trait.Read.html\" title=\"trait async_std::io::Read\">Read</a>, U: <a class=\"trait\" href=\"async_std/io/trait.Read.html\" title=\"trait async_std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"async_std/io/trait.Read.html\" title=\"trait async_std::io::Read\">AsyncRead</a> for <a class=\"struct\" href=\"async_std/io/struct.Chain.html\" title=\"struct async_std::io::Chain\">Chain</a>&lt;T, U&gt;"],["impl <a class=\"trait\" href=\"async_std/io/trait.Read.html\" title=\"trait async_std::io::Read\">AsyncRead</a> for &amp;<a class=\"struct\" href=\"async_std/net/struct.TcpStream.html\" title=\"struct async_std::net::TcpStream\">TcpStream</a>"],["impl <a class=\"trait\" href=\"async_std/io/trait.Read.html\" title=\"trait async_std::io::Read\">AsyncRead</a> for <a class=\"struct\" href=\"async_std/net/struct.TcpStream.html\" title=\"struct async_std::net::TcpStream\">TcpStream</a>"],["impl <a class=\"trait\" href=\"async_std/io/trait.Read.html\" title=\"trait async_std::io::Read\">AsyncRead</a> for <a class=\"struct\" href=\"async_std/os/unix/net/struct.UnixStream.html\" title=\"struct async_std::os::unix::net::UnixStream\">UnixStream</a>"],["impl&lt;T: <a class=\"trait\" href=\"async_std/io/trait.Read.html\" title=\"trait async_std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"async_std/io/trait.Read.html\" title=\"trait async_std::io::Read\">AsyncRead</a> for <a class=\"struct\" href=\"async_std/io/struct.Take.html\" title=\"struct async_std::io::Take\">Take</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"async_std/io/trait.Read.html\" title=\"trait async_std::io::Read\">AsyncRead</a> for <a class=\"struct\" href=\"async_std/io/struct.Repeat.html\" title=\"struct async_std::io::Repeat\">Repeat</a>"],["impl <a class=\"trait\" href=\"async_std/io/trait.Read.html\" title=\"trait async_std::io::Read\">AsyncRead</a> for &amp;<a class=\"struct\" href=\"async_std/fs/struct.File.html\" title=\"struct async_std::fs::File\">File</a>"]],
"blocking":[["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"blocking/struct.Unblock.html\" title=\"struct blocking::Unblock\">Unblock</a>&lt;T&gt;"]],
"futures":[],
"futures_io":[],
"futures_lite":[["impl&lt;T: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_lite/io/struct.ReadHalf.html\" title=\"struct futures_lite::io::ReadHalf\">ReadHalf</a>&lt;T&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_lite/io/struct.Cursor.html\" title=\"struct futures_lite::io::Cursor\">Cursor</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</div>"],["impl&lt;R: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_lite/io/struct.BufReader.html\" title=\"struct futures_lite::io::BufReader\">BufReader</a>&lt;R&gt;"],["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_lite/io/struct.Repeat.html\" title=\"struct futures_lite::io::Repeat\">Repeat</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_lite/io/struct.AssertAsync.html\" title=\"struct futures_lite::io::AssertAsync\">AssertAsync</a>&lt;T&gt;"],["impl&lt;R: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_lite/io/struct.Take.html\" title=\"struct futures_lite::io::Take\">Take</a>&lt;R&gt;"],["impl&lt;R1: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a>, R2: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_lite/io/struct.Chain.html\" title=\"struct futures_lite::io::Chain\">Chain</a>&lt;R1, R2&gt;"],["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_lite/io/struct.Empty.html\" title=\"struct futures_lite::io::Empty\">Empty</a>"],["impl&lt;R: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_lite/io/struct.Bytes.html\" title=\"struct futures_lite::io::Bytes\">Bytes</a>&lt;R&gt;"]],
"futures_rustls":[["impl&lt;IO&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_rustls/server/struct.TlsStream.html\" title=\"struct futures_rustls::server::TlsStream\">TlsStream</a>&lt;IO&gt;<div class=\"where\">where\n    IO: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</div>"],["impl&lt;IO&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_rustls/client/struct.TlsStream.html\" title=\"struct futures_rustls::client::TlsStream\">TlsStream</a>&lt;IO&gt;<div class=\"where\">where\n    IO: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</div>"],["impl&lt;T&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"enum\" href=\"futures_rustls/enum.TlsStream.html\" title=\"enum futures_rustls::TlsStream\">TlsStream</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</div>"]],
"futures_util":[["impl&lt;T&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.AllowStdIo.html\" title=\"struct futures_util::io::AllowStdIo\">AllowStdIo</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,</div>"],["impl&lt;St&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/stream/struct.IntoAsyncRead.html\" title=\"struct futures_util::stream::IntoAsyncRead\">IntoAsyncRead</a>&lt;St&gt;<div class=\"where\">where\n    St: <a class=\"trait\" href=\"futures_util/stream/trait.TryStream.html\" title=\"trait futures_util::stream::TryStream\">TryStream</a>&lt;Error = <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;,\n    St::<a class=\"associatedtype\" href=\"futures_util/stream/trait.TryStream.html#associatedtype.Ok\" title=\"type futures_util::stream::TryStream::Ok\">Ok</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>]&gt;,</div>"],["impl&lt;R: <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.BufReader.html\" title=\"struct futures_util::io::BufReader\">BufReader</a>&lt;R&gt;"],["impl <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.Repeat.html\" title=\"struct futures_util::io::Repeat\">Repeat</a>"],["impl&lt;A, B&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"enum\" href=\"futures_util/future/enum.Either.html\" title=\"enum futures_util::future::Either\">Either</a>&lt;A, B&gt;<div class=\"where\">where\n    A: <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>,\n    B: <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>,</div>"],["impl <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.Empty.html\" title=\"struct futures_util::io::Empty\">Empty</a>"],["impl&lt;T, U&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.Chain.html\" title=\"struct futures_util::io::Chain\">Chain</a>&lt;T, U&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>,\n    U: <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>,</div>"],["impl&lt;R: <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.ReadHalf.html\" title=\"struct futures_util::io::ReadHalf\">ReadHalf</a>&lt;R&gt;"],["impl&lt;W: <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.BufWriter.html\" title=\"struct futures_util::io::BufWriter\">BufWriter</a>&lt;W&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.Cursor.html\" title=\"struct futures_util::io::Cursor\">Cursor</a>&lt;T&gt;"],["impl&lt;R: <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.Take.html\" title=\"struct futures_util::io::Take\">Take</a>&lt;R&gt;"]],
"libp2p_core":[["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"libp2p_core/transport/dummy/struct.DummyStream.html\" title=\"struct libp2p_core::transport::dummy::DummyStream\">DummyStream</a>"],["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"libp2p_core/muxing/struct.SubstreamBox.html\" title=\"struct libp2p_core::muxing::SubstreamBox\">SubstreamBox</a>"]],
"libp2p_noise":[["impl&lt;T: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"libp2p_noise/struct.Output.html\" title=\"struct libp2p_noise::Output\">Output</a>&lt;T&gt;"]],
"libp2p_quic":[["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"libp2p_quic/struct.Stream.html\" title=\"struct libp2p_quic::Stream\">Stream</a>"]],
"libp2p_swarm":[["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"libp2p_swarm/struct.Stream.html\" title=\"struct libp2p_swarm::Stream\">Stream</a>"]],
"libp2p_tcp":[["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"libp2p_tcp/tokio/struct.TcpStream.html\" title=\"struct libp2p_tcp::tokio::TcpStream\">TcpStream</a>"]],
"libp2p_yamux":[["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"libp2p_yamux/struct.Stream.html\" title=\"struct libp2p_yamux::Stream\">Stream</a>"]],
"multistream_select":[["impl&lt;TInner&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"multistream_select/struct.Negotiated.html\" title=\"struct multistream_select::Negotiated\">Negotiated</a>&lt;TInner&gt;<div class=\"where\">where\n    TInner: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</div>"]],
"piper":[["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"piper/struct.Reader.html\" title=\"struct piper::Reader\">Reader</a>"]],
"quinn":[["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"quinn/struct.RecvStream.html\" title=\"struct quinn::RecvStream\">RecvStream</a>"]],
"rw_stream_sink":[["impl&lt;S&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"rw_stream_sink/struct.RwStreamSink.html\" title=\"struct rw_stream_sink::RwStreamSink\">RwStreamSink</a>&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"futures_core/stream/trait.TryStream.html\" title=\"trait futures_core::stream::TryStream\">TryStream</a>&lt;Error = <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;,\n    &lt;S as <a class=\"trait\" href=\"futures_core/stream/trait.TryStream.html\" title=\"trait futures_core::stream::TryStream\">TryStream</a>&gt;::<a class=\"associatedtype\" href=\"futures_core/stream/trait.TryStream.html#associatedtype.Ok\" title=\"type futures_core::stream::TryStream::Ok\">Ok</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>]&gt;,</div>"]],
"smol":[],
"yamux":[["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"yamux/struct.Stream.html\" title=\"struct yamux::Stream\">Stream</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()