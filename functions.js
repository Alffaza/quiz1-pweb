function is_blank(s){
    return s == '';
}

function only_numbers(s){
    return /^[0-9]+$/.test(s);
}

function only_letters(s){
    return /^[a-zA-Z ]+$/.test(s);
}

function is_email_format(s){
    var email_format= (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    return email_format.test(s)
}

function validate_id_not_empty(id_name){
    var v = document.getElementById(id_name).value;
    if (is_blank(v)){
        alert(id_name.replace(/-/g, " ") + " tidak dapat dikosongkan");
        return false;
    }
    return true;
}

function validate_number(s){
    var v = document.getElementById(s).value;
    if (!only_numbers(v)){
        alert("format " + s.replace(/-/g, " ") + " salah");
        return false;
    }
    return true;
}


function submit_form()
{
    if (!validate_id_not_empty("nama")) return false;
    if (!validate_id_not_empty("tempat-lahir")) return false;
    if (!validate_id_not_empty("provinsi")) return false;
    if (!validate_id_not_empty("kecamatan")) return false;
    if (!validate_id_not_empty("kelurahan")) return false;
    if (!validate_id_not_empty("no-telp")) return false;
    if (!validate_id_not_empty("pendidikan-terakhir")) return false;
    if (!validate_id_not_empty("pekerjaan")) return false;
    if (!validate_id_not_empty("hubungan-penanggungjawab")) return false;
    if (!validate_id_not_empty("nama-penanggungjawab")) return false;
    if (!validate_id_not_empty("pendidikan-penanggungjawab")) return false;
    if (!validate_id_not_empty("pekerjaan-penanggungjawab")) return false;

    if ($('input[name=jenis-kelamin]:checked').length == 0) {
        alert("jenis kelamin tidak dapat dikosongkan");
        return false;
    }

    if ($('input[name=agama]:checked').length == 0) {
        alert("agama tidak dapat dikosongkan");
        return false;
    }

    if (document.getElementById('agama-lain').checked) {
        if (!validate_id_not_empty("nama-agama-lain")) return false;
    }

    if (!validate_number("no-telp")) return false;
    if (!validate_number("kode-pos")) return false;
    

    alert("signup success");
    return true;
}