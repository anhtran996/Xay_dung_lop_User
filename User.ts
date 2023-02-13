class User{
    protected name: string;
    protected email:string;
    public role: number
    constructor(name: string, email: string, role: number) {
        this.name = name;
        this.email = email;
        this.role = role
    }
    getInfo(): string{
        return `name: ${this.name}
        email: ${this.email}`
    }
    isAdmin(): string{
        if(this.role === 1){
            return "là admin"
        }else {
            return "là người dùng bình thường"
        }
    }
}