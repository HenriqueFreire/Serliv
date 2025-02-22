{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs
    pkgs.yarn
    pkgs.watchman
    pkgs.androidsdk
    pkgs.androidndk
    pkgs.openjdk
  ];

  shellHook = ''
    export ANDROID_HOME=${pkgs.androidsdk}/libexec
    export PATH=$ANDROID_HOME/emulator:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools:$PATH
  '';
}