fetch('scripts/death_block.lua')
    .then(res => res.text())
    .then(code => {
        CodeMirror(document.getElementById("code"), {
            value: code,
            mode: "lua",
            lineNumbers: true,
            readOnly: true
        });
    });
