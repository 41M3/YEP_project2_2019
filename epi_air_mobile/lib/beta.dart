import 'dart:ui';

import 'package:epiairmobile/connexion.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/widgets.dart';

import 'controler.dart';
import 'package:flutter/material.dart';

class betaPage extends StatelessWidget {
  String ui = url;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(
        backgroundColor: Color(0xff0000ff),
        title: Row(
          children: [
            Container(
              padding: const EdgeInsets.all(8.0),
              child: Text('Beta Controllers', style: TextStyle(fontSize: 30)),
              color: Color(0xff0000ff),
            )
          ],
        ),
        centerTitle: true,
      ),
      body: ListView(
        padding: const EdgeInsets.all(10.0),
        children: <Widget>[
          Container(
              constraints: BoxConstraints.tightFor(width: 100.0, height: 75.0)),
          Container(
            alignment: Alignment.center,
            constraints: BoxConstraints.tightFor(height: 150.0),
            child: Image.asset("img/gamepad3.png"),
          ),
          ListTile(
            title: MaterialButton(
                onPressed: () {
                  url = ui + ':8080/gamepad3';
                  Navigator.of(context).push(MaterialPageRoute(
                      builder: (BuildContext context) => controler()));
                  //builder: (BuildContext context) => ()));
                },
                child: Text(
                  "Gamepad 3",
                  style: TextStyle(color: Colors.white, fontSize: 30),
                ),
                color: Color(0xff850606),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(15.0),
                )),
          ),
          Container(
              constraints: BoxConstraints.tightFor(width: 100.0, height: 75.0)),
          Container(
            alignment: Alignment.center,
            constraints: BoxConstraints.tightFor(height: 150.0),
            child: Image.asset("img/gamepad4.png"),
          ),
          ListTile(
            title: MaterialButton(
                onPressed: () {
                  url = ui + ':8080/gamepad4';
                  Navigator.of(context).push(MaterialPageRoute(
                      builder: (BuildContext context) => controler()));
                },
                child: Text(
                  "Gamepad 4",
                  style: TextStyle(color: Colors.white, fontSize: 30),
                ),
                color: Color(0xff850606),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(15.0),
                )),
          )
        ],
      ),
    );
  }
}
