class Password {
    constructor() {
        this.upcl = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.lwcl = "abcdefghijklmnopqrstuvwxyz";
        this.number = "1234567890";
        this.symbol = "~!@#$%^&*()_+\|/";
    }

    funnyPassword() {
        let arr = ["Beta_tumse_na_ho_payega","Ab_Bawandar_aayega","Pucha_Kisine","Yeh_sab_doglapan_hai","abey saaley", "dilse bura lagta hai bhai","gajeeb bejaati hai", "Chitu_Hacker", "abhi bhi time hai sudhar ja" ,"tu_Foot_path_Pe_Mil","Aee_Vedya","katai_zeher","Karwali_bejatti","Women","BhaiKyaKr_Rha_hai_tu", "user", "maiNahiBatunga",]
        let pass = arr[Math.floor(Math.random() * arr.length)]
        return pass
    }

    weakPassword() {
        let arr = [this.upcl, this.lwcl]
        let pass = ""
        for (let i = 0; i < 8; i++) {
            let Ran1 = Math.floor(Math.random() * arr.length)
            let Ran2 = Math.floor(Math.random() * arr[Ran1].length)
            pass += arr[Ran1][Ran2]
        }
        return pass
    }

    mediumPassword() {
        let arr = [this.upcl, this.lwcl, this.number]
        let pass = ""
        for (let i = 0; i < 12; i++) {
            let Ran1 = Math.floor(Math.random() * arr.length)
            let Ran2 = Math.floor(Math.random() * arr[Ran1].length)
            pass += arr[Ran1][Ran2]
        }
        return pass
    }

    StrongPassword() {
        let arr = [this.upcl, this.lwcl, this.number, this.symbol]
        let pass = ""
        for (let i = 0; i < 15; i++) {
            let Ran1 = Math.floor(Math.random() * arr.length)
            let Ran2 = Math.floor(Math.random() * arr[Ran1].length)
            pass += arr[Ran1][Ran2]
        }
        return pass
    }
}

let display = document.getElementById("display");
let radio = document.getElementsByClassName("redio");
let btn = document.getElementById("btn");   

let a = new Password()

btn.addEventListener("click", () => {
    let b;
    if (radio[0].checked) {
        b = a.weakPassword()
    }
    else if (radio[1].checked) {
        b = a.mediumPassword()
    }
    else if (radio[2].checked) {
        b = a.StrongPassword()
    }
    else if (radio[3].checked) {
        b = a.funnyPassword()
    }
    display.textContent = b
})
