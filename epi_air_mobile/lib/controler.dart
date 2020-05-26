import 'dart:async';

import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';
import 'package:flutter/services.dart';

import 'connexion.dart';

class controler extends StatefulWidget {
  @override
  _controler createState() => _controler();
}

class _controler extends State<controler> {
  String oui = url;
  Completer<WebViewController> _controller = Completer<WebViewController>();

  @override
  void initState() {
    SystemChrome.setPreferredOrientations([
      DeviceOrientation.landscapeRight,
      DeviceOrientation.landscapeLeft,
    ]);
  }

  @override
  Widget build(BuildContext context) {
    initState();

    return Scaffold(
      backgroundColor: Colors.black,
      appBar:
          PreferredSize(preferredSize: Size.fromHeight(2.0), child: AppBar()),
      body: WebView(
        initialUrl: 'http://' + oui,
        onWebViewCreated: (WebViewController webViewController) {
          _controller.complete(webViewController);
        },
        javascriptMode: JavascriptMode.unrestricted,
      ),
    );
  }
}
