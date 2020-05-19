import 'dart:ui';

import 'package:flutter/cupertino.dart';

import 'controler.dart';
import 'package:flutter/material.dart';

String url;

class connexionPage extends StatelessWidget {
  final TextEditingController searchController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(
        backgroundColor: Color(0xff0000ff),
        title: Row(

          children: [
            Container(padding: const EdgeInsets.all(8.0), child: Text('EpiAirConsole', style: TextStyle(fontSize: 45)), color: Color(0xff0000ff),)
          ],
        ),
        centerTitle: true,
      ),
      body: ListView(
        padding: const EdgeInsets.all(10.0),
        children: <Widget>[
          new Container(
            constraints: BoxConstraints.tightFor(width: 100.0, height: 100.0),
          ),
          new Container(
            constraints: BoxConstraints.tightFor(width: 120.0, height: 120.0),
            child: Image.asset("img/epiairconsole.png"),
          ),
          new Container(
              constraints: BoxConstraints.tightFor(width: 100.0, height: 75.0)),
          ListTile(
            title: TextFormField(
              cursorColor: Color(0xff850606),
              controller: searchController,
              decoration: InputDecoration(
                hintText: "Exemple : 192.168.0.27",
                labelText: "Web ID",
                labelStyle: new TextStyle(color: Color(0xff0000ff)),
                contentPadding:
                const EdgeInsets.fromLTRB(15.0, 20.0, 10.0, 25.0),
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(15.0),
                    borderSide: BorderSide(
                      color: Color(0xff0000ff)
                    )
                  ),
                focusedBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(15.0),
                  borderSide: BorderSide(
                    color: Color(0xff0000ff)
                  )
                )
              ),
            ),
          ),
          ListTile(
            title: MaterialButton(
                onPressed: () {
                  url = searchController.text + ':8080/gamepad';
                  Navigator.of(context).push(MaterialPageRoute(
                      builder: (BuildContext context) => controler()));
                      //builder: (BuildContext context) => ()));
                },
                child: Text(
                  "Connect",
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