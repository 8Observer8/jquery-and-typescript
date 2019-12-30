import * as $ from "jquery";

// Playground: https://next.plnkr.co/edit/CoBEcB8vlZfQqAfz?preview

class Program
{
    public static Main(): void
    {
        console.log("Hello Main");
    }
}

Program.Main();

$(document).ready(() =>
{
    console.log("Hello jQuery");
});
