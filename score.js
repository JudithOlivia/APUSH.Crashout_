function calculateAPUSH() {
    // Get values from inputs
    let mcq = parseInt(document.getElementById("mcq").value) || 0;
    let saq1 = parseInt(document.getElementById("saq1").value) || 0;
    let saq2 = parseInt(document.getElementById("saq2").value) || 0;
    let saq3 = parseInt(document.getElementById("saq3").value) || 0;
    let dbq = parseInt(document.getElementById("dbq").value) || 0;
    let leq = parseInt(document.getElementById("leq").value) || 0;

    // Convert raw scores → composite
    let mcqComposite = (mcq / 55) * 52;   // 55 raw → 52 composite
    let saqComposite = ((saq1 + saq2 + saq3) / 9) * 27; // 9 raw → 27 composite
    let dbqComposite = (dbq / 7) * 33;    // 7 raw → 33 composite
    let leqComposite = (leq / 6) * 20;    // 6 raw → 20 composite

    // Total composite score
    let composite = Math.round(mcqComposite + saqComposite + dbqComposite + leqComposite);

    // Decide AP score (thresholds)
    let apScore = "1";
    if (composite >= 97) apScore = "5";
    else if (composite >= 80) apScore = "4";
    else if (composite >= 63) apScore = "3";
    else if (composite >= 44) apScore = "2";

    // Update results in HTML
    document.getElementById("composite").textContent = composite;
    document.getElementById("ap-score").textContent = apScore;
}
