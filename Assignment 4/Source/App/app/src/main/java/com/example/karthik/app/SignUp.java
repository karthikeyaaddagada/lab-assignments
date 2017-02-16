package com.example.karthik.app;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.google.android.gms.appindexing.AppIndex;
import com.google.android.gms.common.api.GoogleApiClient;


public class SignUp extends Activity{
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.signup);

    }

    public void onSignUpClick(View v)
    {
        if(v.getId() == R.id.Bsignupbutton)
        {
            EditText name = (EditText)findViewById(R.id.TFname);
            EditText email = (EditText)findViewById(R.id.TFemail);
            EditText uname = (EditText)findViewById(R.id.TFuname);
            EditText pass1 = (EditText)findViewById(R.id.TFpass1);
            EditText pass2 = (EditText)findViewById(R.id.TFpass2);

            String namestr =name.getText().toString();
            String emailstr =email.getText().toString();
            String unamestr =uname.getText().toString();
            String pass1str =pass1.getText().toString();
            String pass2str =pass2.getText().toString();

            if(!pass1str.endsWith(pass2str))
            {
                //pop msg
                Toast pass = Toast.makeText(SignUp.this, "Password doen't match!", Toast.LENGTH_SHORT);
                pass.show();
            }

        }
    }

}