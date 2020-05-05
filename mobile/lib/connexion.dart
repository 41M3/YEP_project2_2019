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
        backgroundColor: Color(0xff808080),
        title: Row(

          children: [
            Container(padding: const EdgeInsets.all(8.0), child: Text('AREA', style: TextStyle(fontSize: 45)), color: Color(0xff808080),)
          ],
        ),
        centerTitle: true,
      ),
      body: ListView(
        padding: const EdgeInsets.all(10.0),
        children: <Widget>[
          Container(
              constraints: BoxConstraints.tightFor(width: 100.0, height: 75.0)),
          ListTile(
            title: TextFormField(
              cursorColor: Colors.red,
              controller: searchController,
              decoration: InputDecoration(
                hintText: "192.168.0.35",
                labelText: "Enter an address",
                labelStyle: new TextStyle(color: Color(0xff48ff00)),
                contentPadding:
                const EdgeInsets.fromLTRB(15.0, 20.0, 10.0, 25.0),
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(15.0),
                    borderSide: BorderSide(
                      color: Color(0xff48ff00)
                    )
                  ),
                focusedBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(15.0),
                  borderSide: BorderSide(
                    color: Color(0xff48ff00)
                  )
                )
                //labelStyle: new TextStyle(color: Colors.greenAccent),
              ),
            ),
          ),
          ListTile(
            title: MaterialButton(
                /*onPressed: () {
                  input = searchController.text;
                  Navigator.push(
                      context, MaterialPageRoute(builder: (context) => webDisplay()));
                },*/
                onPressed: () {
                  url = searchController.text + ':8081';
                  Navigator.of(context).push(MaterialPageRoute(
                      builder: (BuildContext context) => webDisplay()));
                },
                child: Text(
                  "Connect",
                  style: TextStyle(color: Colors.white, fontSize: 30),
                ),
                color: Colors.red,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(15.0),
                )),
          )
        ],
      ),
    );
  }
}