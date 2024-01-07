# Tauri mobile
This is a tauri mobile demo.

## usages
在项目根目录内可以使用命令，快速生成android或者ios的代码目录，
如`npm run tauri android init`或者`npm run tauri ios init`，项目的`src-tauri`目录就产生了`gen`目录 ，
其中就是移动端的自动生成的代码，我们除非签名或者其他配置才需要动他。然后想要运行或者打包安卓或ios的话，就使用命令:
- `npm run tauri android dev` or `npm run tauri ios dev`
- `npm run tauri android build` or `npm run tauri ios build`

### How to use tauri android sign build
- Create an upload Keystore `keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000 -storepass 123456 -keypass 123456 -dname "CN=John Doe, OU=Development, O=YourCompany, L=YourCity, S=YourState, C=YourCountry"`

- [android sign build reference](https://next--tauri.netlify.app/next/guides/distribution/sign-android)

## reference
[Tauri beta](https://beta.tauri.app/)
