class Password{
    constructor(){
        this.password = "";
    }

    generatePass(len){
        let chars = "abcdefghijklmnopqrswxyz";
        let nums = "1234567890";
        let specs ="@#&*"
         if (len<5){
            console.log("Your password should be at least 5 characters long");
        }

        else{
            let i=0;
            while(i<len){
                this.password += chars[Math.floor(Math.random() * chars.length)];
                this.password += nums[Math.floor(Math.random() * nums.length)];
                this.password += specs[Math.floor(Math.random() * specs.length)];
                i+=5;
            }
            this.password = this.password.substr(0,len)
            return this.password
        }
    }
}

let p = new Password();
console.log(p.generatePass(11));
