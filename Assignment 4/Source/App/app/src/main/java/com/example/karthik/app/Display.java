package com.example.karthik.app;

import android.app.Activity;
import android.os.Bundle;
import android.speech.tts.TextToSpeech;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import java.util.Locale;


public class Display extends Activity {

    TextToSpeech ttsobject;
    int result;
    EditText et;
    String text;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.display);
        String username = getIntent().getStringExtra("Username");

        TextView tv = (TextView)findViewById(R.id.TVusername);
        tv.setText(username);

        et = (EditText)findViewById(R.id.editText);

        ttsobject = new TextToSpeech(Display.this, new TextToSpeech.OnInitListener() {
            @Override
            public void onInit(int status) {

                if(status == TextToSpeech.SUCCESS){

                    result = ttsobject.setLanguage(Locale.UK);

                }else {

                    Toast.makeText(getApplicationContext(), "Feature not Supported in your Device", Toast.LENGTH_SHORT).show();
                }
            }
        });
    }

    public void doSomething(View v) {

        switch (v.getId()){
            case R.id.bspeak:

                if(result == TextToSpeech.LANG_NOT_SUPPORTED || result == TextToSpeech.LANG_MISSING_DATA){

                    Toast.makeText(getApplicationContext(), "Feature not Supported in your Device", Toast.LENGTH_SHORT).show();
                } else {
                    text = et.getText().toString();

                    ttsobject.speak(text, TextToSpeech.QUEUE_FLUSH, null);

                }

                break;
            case R.id.bstopspeaking:

                if(ttsobject != null) {
                    ttsobject.stop();
                }


                break;
        }

    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if(ttsobject != null) {
            ttsobject.stop();
            ttsobject.shutdown();
        }
    }
}