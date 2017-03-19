package com.myprojecttest;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    /**
     * RN是运行在ReactActivity上的   也可以自己写Activity  extends ReactActivity
     * 返回从JavaScript注册的主要组件的名称。
     * Returns the name of the main component registered from JavaScript.
     * 这用于调度组件的呈现。
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "MyProjectTest";
    }
}
