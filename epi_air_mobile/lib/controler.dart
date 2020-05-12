import 'dart:async';

import 'package:flutter/material.dart';
import 'connexion.dart';
import 'package:webview_flutter/webview_flutter.dart';

class controler extends StatefulWidget {
  @override
  _controler createState() => _controler();
}

class _controler extends State<controler> {

  String oui = url;
  Completer<WebViewController> _controller = Completer<WebViewController>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Colors.black,
        appBar: PreferredSize(
            preferredSize: Size.fromHeight(2.0),
            child:AppBar(
            )),
        body: WebView(
          initialUrl: 'http://' + oui,
          onWebViewCreated: (WebViewController webViewController) {
            _controller.complete(webViewController);
          },
        ),
    );
  }


  _googleAuth() {
    String gootmp = oui +'/auth/google';
    return FutureBuilder<WebViewController>(
      future: _controller.future,
      builder:
          (BuildContext context, AsyncSnapshot<WebViewController> controller) {
        if (controller.hasData) {
          return FloatingActionButton(
            backgroundColor: Colors.red,
            onPressed: () async {
              url = gootmp;
              Navigator.of(context).push(MaterialPageRoute(
                  builder: (BuildContext context) => controler()));
            },
            child: Text('GOOGLE', style: TextStyle(color: Colors.white)),
          );
        }
        return Container();
      },
    );
  }
  _officeAuth() {
    String offtmp = oui +'/auth/azureadoauth2';
    return FutureBuilder<WebViewController>(
      future: _controller.future,
      builder:
          (BuildContext context, AsyncSnapshot<WebViewController> controller) {
        if (controller.hasData) {
          return FloatingActionButton(
            backgroundColor: Colors.red,
            onPressed: () async {
              url = offtmp;
              Navigator.of(context).push(MaterialPageRoute(
                  builder: (BuildContext context) => controler()));
            },
            child: Text('OFFICE', style: TextStyle(color: Colors.white)),
          );
        }
        return Container();
      },
    );
  }
}