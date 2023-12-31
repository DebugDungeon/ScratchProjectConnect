function answerStorage() { // Respond to changes to variables that begin with "[local]"
    window.localVars = {};
    for (var_id in backdrop.variables) {
        if (backdrop.variables[var_id].name.startsWith("[local]")) {
            const lvar_id = "spc_localVar_" + var_id;
            if (lvar_id in localStorage) {
                backdrop.variables[var_id].value = localStorage[lvar_id];
            }
            localVars[var_id] = backdrop.variables[var_id].value;
        }
    }
    setInterval(function () {
        try {
            for (var_id in localVars) {
                if (backdrop.variables[var_id].value !== localVars[var_id]){
                    localVars[var_id] = backdrop.variables[var_id].value;
                    const lvar_id = "spc_localVar_" + var_id;
                    localStorage[lvar_id] = localVars[var_id];
                }
            }
        }
        catch (err) {
            console.log(`There was an error while storing local data: ${err}`);
        }
    }, 20)
}