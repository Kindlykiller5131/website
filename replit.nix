{ pkgs }: {
  deps = [
    pkgs.iputils
    pkgs.inetutils
    pkgs.cope
    pkgs.unixtools.ping
    pkgs.iam-policy-json-to-terraform
    pkgs.root
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server  
  ];
}