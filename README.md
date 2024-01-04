# Tauri mobile
This is a tauri mobile demo.

## usages
在项目根目录内可以使用命令，快速生成android或者ios的代码目录，
如`npm run tauri android init`或者`npm run tauri ios init`，项目的`src-tauri`目录就产生了`gen`目录 ，
其中就是移动端的自动生成的代码，我们除非签名或者其他配置才需要动他。然后想要运行或者打包安卓或ios的话，就使用命令:
- `npm run tauri android dev` or `npm run tauri ios dev`
- `npm run tauri android build` or `npm run tauri ios build`

### How to use tauri android sign build

- vite config port
- [android sign build reference](https://next--tauri.netlify.app/next/guides/distribution/sign-android)
  build.gradle.kts config:
```
import java.util.Properties
import java.io.FileInputStream

plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
    id("rust")
}

val keyPropertiesFile = rootProject.file("key.properties")
val keyProperties = Properties()
keyProperties.load(FileInputStream(keyPropertiesFile))

android {
    compileSdk = 33
    namespace = "com.thoughtworks.app"
    defaultConfig {
        manifestPlaceholders["usesCleartextTraffic"] = "false"
        applicationId = "com.thoughtworks.app"
        minSdk = 24
        targetSdk = 33
        versionCode = 1
        versionName = "1.0"
    }
    signingConfigs {
       create("release") {
           keyAlias = keyProperties["keyAlias"] as String
           keyPassword = keyProperties["keyPassword"] as String
           storeFile = file(keyProperties["storeFile"] as String)
           storePassword = keyProperties["storePassword"] as String
       }
    }
    buildTypes {
        getByName("debug") {
            manifestPlaceholders["usesCleartextTraffic"] = "true"
            isDebuggable = true
            isJniDebuggable = true
            isMinifyEnabled = false
            packaging {                jniLibs.keepDebugSymbols.add("*/arm64-v8a/*.so")
                jniLibs.keepDebugSymbols.add("*/armeabi-v7a/*.so")
                jniLibs.keepDebugSymbols.add("*/x86/*.so")
                jniLibs.keepDebugSymbols.add("*/x86_64/*.so")
            }
        }
        getByName("release") {
            isMinifyEnabled = true
            signingConfig = signingConfigs.getByName("release")
            proguardFiles(
                *fileTree(".") { include("**/*.pro") }
                    .plus(getDefaultProguardFile("proguard-android-optimize.txt"))
                    .toList().toTypedArray()
            )
        }
    }
    ······
}
······

```

## reference
[Tauri beta](https://beta.tauri.app/)
