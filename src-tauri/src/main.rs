#![cfg_attr(
all(not(debug_assertions), target_os = "windows"),
windows_subsystem = "windows"
)]

use app::AppBuilder;

pub fn main() {
  // Change demo_mobile_app to the name of your app!
  AppBuilder::new().run();
}
