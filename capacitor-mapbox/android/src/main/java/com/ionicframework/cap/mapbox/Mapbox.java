package com.ionicframework.cap.mapbox;

import android.Manifest;
import android.content.Intent;
import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin(permissions={
        Manifest.permission.ACCESS_FINE_LOCATION
})
public class Mapbox extends Plugin {

    @PluginMethod()
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", value);
        call.success(ret);
    }

    @PluginMethod()
    public void openMap(PluginCall call) {
        Double latitude = call.getDouble("lat");
        Double longitude = call.getDouble("long");

        Intent intent = new Intent("com.ionicframework.cap.mapbox.MapBoxActivity");
        intent.putExtra("lat", latitude);
        intent.putExtra("long", longitude);
        startActivityForResult(call, intent, 1);
    }
}
