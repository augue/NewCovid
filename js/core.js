$(document).ready(function () {
    var age, gender, temperature, symptoms = [], addInfo = [], contacts, illInfo = [], currentCondition, formData = {};
    $('#confirmAge').click(function () {
        age = $(".age").val()
        console.log(age);
        $('#modalAge').modal('hide')
        // $('#modalAge').modal({
        //     backdrop: 'static',
        //     keyboard: false
        // });
        $('#modalgender').modal('show')
    })

    // Gender
    $('#male').click(function () {
        gender = $(this).attr('id');
        console.log(gender);
        $('#modalgender').modal('hide');
        $('#modalgender').modal({
            backdrop: 'static',
            keyboard: false
        });
        $('#modaltemp').modal('show')
    })

    $('#female').click(function () {
        gender = $(this).attr('id');
        console.log(gender);
        $('#modalgender').modal('hide')
        $('#modalgender').modal({
            backdrop: 'static',
            keyboard: false
        });
        $('#modaltemp').modal('show')
    })

    $('#other').click(function () {
        gender = $(this).attr('id');
        console.log(gender);
        $('#modalgender').modal('hide')
        $('#modalgender').modal({
            backdrop: 'static',
            keyboard: false
        });
        $('#modaltemp').modal('show')
    })





    // Temperature
    $('#normal').click(function () {
        temperature = $(this).attr('id');
        console.log(temperature);
        $('#modaltemp').modal('hide')
        $('#modaltemp').modal({
            backdrop: 'static',
            keyboard: false
        });
        $('#modalsymptoms').modal('show')
    })

    $('#fever').click(function () {
        temperature = $(this).attr('id');
        console.log(temperature);
        $('#modaltemp').modal('hide')
        $('#modaltemp').modal({
            backdrop: 'static',
            keyboard: false
        });
        $('#modalsymptoms').modal('show')
    })
    $('#high').click(function () {
        temperature = $(this).attr('id');
        console.log(temperature);
        $('#modaltemp').modal('hide')
        $('#modaltemp').modal({
            backdrop: 'static',
            keyboard: false
        });
        $('#modalsymptoms').modal('show')
    })



    var clickState = {
        dryS: 1,
        lossS: 1,
        soreS: 1,
        changeS: 1,
        weakS: 1,
        moderateS:1,
        feelS:1,
        difficultS:1,
        drowseS:1,
        painS:1,
        severeS:1,
        diabetesS:1,
        bloodS:1,
        heartS:1,
        kidneyS:1,
        lungS:1,
        strokeS:1,
        immunityS:1
    }

// symptoms
    $('#dry').click(function () {
        var value = $(this).attr('id')
        if (clickState.dryS == 1) {
            // pushing symptom into array
            symptoms.push(value);
            $('#dry').removeClass("btn-outline-warning")
            $('#dry').addClass('btn-warning')
            clickState.dryS = 0
            
        }
        else {
            if((index = symptoms.indexOf(value)) !== -1){
                symptoms.splice(index, 1);
            }
            $('#dry').removeClass("btn-warning")
            $('#dry').addClass('btn-outline-warning')
            clickState.dryS = 1
        }
        showOK()
        console.log( clickState.dryS)
        console.log(symptoms);
    })



    $('#loss').click(function () {
        var value = $(this).attr('id')
        if (clickState.lossS == 1) {
            symptoms.push(value);
            $('#loss').removeClass("btn-outline-warning")
            $('#loss').addClass('btn-warning')
            clickState.lossS = 0
        }
        else {
            if((index = symptoms.indexOf(value)) !== -1){
                symptoms.splice(index, 1);
            }
            $('#loss').removeClass("btn-warning")
            $('#loss').addClass('btn-outline-warning')
            clickState.lossS = 1
        }
        showOK()
        console.log( clickState.lossS)
        console.log(symptoms);
        
    })


    $('#sore').click(function () {
        var value = $(this).attr('id')
        if (clickState.soreS == 1) {
            symptoms.push(value)
            $('#sore').removeClass("btn-outline-warning")
            $('#sore').addClass('btn-warning')
            clickState.soreS = 0
        }
        else {
            if((index = symptoms.indexOf(value)) !== -1){
                symptoms.splice(index, 1);
            }
            $('#sore').removeClass("btn-warning")
            $('#sore').addClass('btn-outline-warning')
            clickState.soreS = 1
        }
        showOK()
        console.log( clickState.soreS)
        console.log(symptoms);
    })


    $('#change').click(function () {
        var value = $(this).attr('id')
        if (clickState.changeS == 1) {
            symptoms.push(value)
            $('#change').removeClass("btn-outline-warning")
            $('#change').addClass('btn-warning')
            clickState.changeS = 0
        }
        else {
            if((index = symptoms.indexOf(value)) !== -1){
                symptoms.splice(index, 1);
            }
            $('#change').removeClass("btn-warning")
            $('#change').addClass('btn-outline-warning')
            clickState.changeS = 1
        }
        showOK()
        console.log( clickState.changeS)
        console.log(symptoms)
    })

    $('#weak').click(function () {
        var value = $(this).attr('id')
        if (clickState.weakS == 1) {
            symptoms.push(value);
            $('#weak').removeClass("btn-outline-warning")
            $('#weak').addClass('btn-warning')
            clickState.weakS = 0
        }
        else {
            if((index = symptoms.indexOf(value)) !== -1){
                symptoms.splice(index, 1);
            }
            $('#weak').removeClass("btn-warning")
            $('#weak').addClass('btn-outline-warning')
            clickState.weakS = 1
        }
        showOK()
        console.log( clickState.weakS)
        console.log(symptoms)
    })

    $('#ok').hide()

    function showOK() {
        $('#ok').show()
      
        if(clickState.changeS ==1 && clickState.dryS == 1 && clickState.lossS == 1 && clickState.soreS == 1 && clickState.weakS == 1)
        {
            $('#none').show() 
            $('#ok').hide()   
        }
        else
        {
           $('#none').hide()    
        }
    }

    $('#ok').click(function () {
        $('#modalsymptoms').modal('hide')
        $('#modalsymptoms').modal({
            backdrop: 'static',
            keyboard: false
        });
        $('#modalAdd').modal('show')
        console.log(symptoms);
    })
    $("#none").click(function (){
        console.log(symptoms);
        console.log("Length "+ symptoms.length);
        $('#modalsymptoms').modal('hide')
        $('#modalsymptoms').modal({
            backdrop: 'static',
            keyboard: false
        });
        $('#modalAdd').modal('show')
    })

//additional sympthms
$('#moderate').click(function () {
    var value = $(this).attr('id');
    if (clickState.moderateS == 1) {
        addInfo.push(value)
        $('#moderate').removeClass("btn-outline-warning")
        $('#moderate').addClass('btn-warning')
        clickState.moderateS = 0
    }
    else {
        if((index = addInfo.indexOf(value)) !== -1){
            addInfo.splice(index, 1);
        }
        $('#moderate').removeClass("btn-warning")
        $('#moderate').addClass('btn-outline-warning')
        clickState.moderateS = 1
    }
    showOK1()
    console.log( clickState.moderateS)
    console.log(addInfo)
})

$('#feel').click(function () {
    var value = $(this).attr('id');
    if (clickState.feelS == 1) {
        addInfo.push(value);
        $('#feel').removeClass("btn-outline-warning")
        $('#feel').addClass('btn-warning')
        clickState.feelS = 0
       
        
    }
    else {
        if((index = addInfo.indexOf(value)) !== -1){
            addInfo.splice(index, 1);
        }
        $('#feel').removeClass("btn-warning")
        $('#feel').addClass('btn-outline-warning')
        clickState.feelS = 1
    }
    showOK1()
    console.log( clickState.feelS)
    console.log( addInfo)
})

$('#difficult').click(function () {
    var value = $(this).attr('id');
    if (clickState.difficultS == 1) {
        addInfo.push(value);
        $('#difficult').removeClass("btn-outline-warning")
        $('#difficult').addClass('btn-warning')
        clickState.difficultS = 0
       
        
    }
    else {
        if((index = addInfo.indexOf(value)) !== -1){
            addInfo.splice(index, 1);
        }
        $('#difficult').removeClass("btn-warning")
        $('#difficult').addClass('btn-outline-warning')
        clickState.difficultS = 1
    }
    showOK1()
    console.log( clickState.difficultS)
    console.log(addInfo)
})

$('#drowse').click(function () {
    var value = $(this).attr('id');
    if (clickState.drowseS == 1) {
        addInfo.push(value);
        $('#drowse').removeClass("btn-outline-warning")
        $('#drowse').addClass('btn-warning')
        clickState.drowseS = 0
    }
    else {
        if((index = addInfo.indexOf(value)) !== -1){
            addInfo.splice(index, 1);
        }
        $('#drowse').removeClass("btn-warning")
        $('#drowse').addClass('btn-outline-warning')
        clickState.drowseS = 1
    }
    showOK1()
    console.log( clickState.drowseS)
    console.log( addInfo)
})


$('#pain').click(function () {
    var value = $(this).attr('id');
    if (clickState.painS == 1) {
        addInfo.push(value)
        $('#pain').removeClass("btn-outline-warning")
        $('#pain').addClass('btn-warning')
        clickState.painS = 0
       
        
    }
    else {
        if((index = addInfo.indexOf(value)) !== -1){
            addInfo.splice(index, 1);
        }
        $('#pain').removeClass("btn-warning")
        $('#pain').addClass('btn-outline-warning')
        clickState.painS = 1
    }
    showOK1()
    console.log( clickState.painS)
    console.log( addInfo)
})

$('#severe').click(function () {
    var value = $(this).attr('id');
    if (clickState.severeS == 1) {
        addInfo.push(value)
        $('#severe').removeClass("btn-outline-warning")
        $('#severe').addClass('btn-warning')
        clickState.severeS = 0
       
        
    }
    else {
        if((index = addInfo.indexOf(value)) !== -1){
            addInfo.splice(index, 1);
        }
        $('#severe').removeClass("btn-warning")
        $('#severe').addClass('btn-outline-warning')
        clickState.severeS = 1
    }
    showOK1()
    console.log( clickState.severeS)
    console.log( addInfo)
})


$('#ok1').hide()

function showOK1() {
    $('#ok1').show()
  
    if(clickState.moderateS ==1 && clickState.painS == 1 && clickState.severeS == 1 && clickState.difficultS == 1 && clickState.feelS == 1 && clickState.drowseS == 1 )
    {
        $('#none1').show() 
        $('#ok1').hide()   
    }
    else
    {
       $('#none1').hide()    
    }
}

$('#ok1').click(function () {
    $('#modalAdd').modal('hide')
    $('#modalAdd').modal({
        backdrop: 'static',
        keyboard: false
    });
    $('#modalTravel').modal('show')
    console.log(addInfo)
})
$("#none1").click(function (){
    console.log(addInfo);
    console.log("Length "+ addInfo.length);
    $('#modalAdd').modal('hide')
    $('#modalAdd').modal({
        backdrop: 'static',
        keyboard: false
    });
    $('#modalTravel').modal('show')
})
//travel
$('#history').click(function () {
    contacts = $(this).attr('id');
    console.log(contacts);
    $('#modalTravel').modal('hide')
    $('#modalsickness').modal('show')
})

$('#contact').click(function () {
    contacts = $(this).attr('id');
    console.log(contacts);
    $('#modalTravel').modal('hide')
    $('#modalsickness').modal('show')
})

$('#meeting').click(function () {
    contacts = $(this).attr('id');
    console.log(contacts);
    $('#modalTravel').modal('hide')
    $('#modalsickness').modal('show')
})

$('#Close').click(function () {
    contacts = $(this).attr('id');
    console.log(contacts);
    $('#modalTravel').modal('hide')
    $('#modalsickness').modal('show')
})

//sickness
$('#diabetes').click(function () {
    var value = $(this).attr('id');
    if (clickState.diabetesS == 1) {
        illInfo.push(value);
        $('#diabetes').removeClass("btn-outline-warning")
        $('#diabetes').addClass('btn-warning')
        clickState.diabetesS = 0
    }
    else {
        if((index = illInfo.indexOf(value)) !== -1){
            illInfo.splice(index, 1);
        }
        $('#diabetes').removeClass("btn-warning")
        $('#diabetes').addClass('btn-outline-warning')
        clickState.diabetesS = 1
    }
    showOK2()
    console.log( clickState.diabetesS)
    console.log( illInfo)
})

$('#blood').click(function () {
    var value = $(this).attr('id');
    if (clickState.bloodS == 1) {
        illInfo.push(value);
        $('#blood').removeClass("btn-outline-warning")
        $('#blood').addClass('btn-warning')
        clickState.bloodS = 0
    }
    else {
        if((index = illInfo.indexOf(value)) !== -1){
            illInfo.splice(index, 1);
        }
        $('#blood').removeClass("btn-warning")
        $('#blood').addClass('btn-outline-warning')
        clickState.bloodS = 1
    }
    showOK2()
    console.log( clickState.bloodS)
    console.log(illInfo)
})

$('#heart').click(function () {
    var value = $(this).attr('id');
    if (clickState.heartS == 1) {
        illInfo.push(value);
        $('#heart').removeClass("btn-outline-warning")
        $('#heart').addClass('btn-warning')
        clickState.heartS = 0
    }
    else {
        if((index = illInfo.indexOf(value)) !== -1){
            illInfo.splice(index, 1);
        }
        $('#heart').removeClass("btn-warning")
        $('#heart').addClass('btn-outline-warning')
        clickState.heartS = 1
    }
    showOK2()
    console.log( clickState.heartS)
    console.log(illInfo)
})

$('#kidney').click(function () {
    var value = $(this).attr('id');
    if (clickState.kidneyS == 1) {
        illInfo.push(value);
        $('#kidney').removeClass("btn-outline-warning")
        $('#kidney').addClass('btn-warning')
        clickState.kidneyS = 0

    }
    else {
        if((index = illInfo.indexOf(value)) !== -1){
            illInfo.splice(index, 1);
        }
        $('#kidney').removeClass("btn-warning")
        $('#kidney').addClass('btn-outline-warning')
        clickState.kidneyS = 1
    }
    showOK2()
    console.log( clickState.kidneyS)
    console.log(illInfo)
})

$('#lung').click(function () {
    var value = $(this).attr('id');
    if (clickState.lungS == 1) {
        illInfo.push(value);
        $('#lung').removeClass("btn-outline-warning")
        $('#lung').addClass('btn-warning')
        clickState.lungS = 0
    }
    else {
        if((index = illInfo.indexOf(value)) !== -1){
            illInfo.splice(index, 1);
        }
        $('#lung').removeClass("btn-warning")
        $('#lung').addClass('btn-outline-warning')
        clickState.lungS = 1
    }
    showOK2()
    console.log( clickState.lungS)
    console.log(illInfo)
})

$('#stroke').click(function () {
    var value = $(this).attr('id');
    if (clickState.strokeS == 1) {
        illInfo.push(value);
        $('#stroke').removeClass("btn-outline-warning")
        $('#stroke').addClass('btn-warning')
        clickState.strokeS = 0
    }
    else {
        if((index = illInfo.indexOf(value)) !== -1){
            illInfo.splice(index, 1);
        }
        $('#stroke').removeClass("btn-warning")
        $('#stroke').addClass('btn-outline-warning')
        clickState.strokeS = 1
    }
    showOK2()
    console.log( clickState.strokeS)
    console.log(illInfo)
})

$('#immunity').click(function () {
    var value = $(this).attr('id');
    if (clickState.immunityS == 1) {
        illInfo.push(value);
        $('#immunity').removeClass("btn-outline-warning")
        $('#immunity').addClass('btn-warning')
        clickState.immunityS = 0
    }
    else {
        if((index = illInfo.indexOf(value)) !== -1){
            illInfo.splice(index, 1);
        }
        $('#immunity').removeClass("btn-warning")
        $('#immunity').addClass('btn-outline-warning')
        clickState.immunityS = 1
    }
    showOK2()
    console.log( clickState.immunityS)
    console.log(illInfo)
})
$('#ok2').hide()
function showOK2() {
    $('#ok2').show()
  
    if(clickState.diabetesS ==1 && clickState.bloodS == 1 && clickState.heartS == 1 && clickState.kidneyS == 1 && clickState.lungS == 1 && clickState.strokeS == 1 && clickState.immunityS == 1 )
    {
        $('#none2').show() 
        $('#ok2').hide()   
    }
    else
    {
       $('#none2').hide()    
    }
}
$('#ok2').click(function () {
    $('#modalsickness').modal('hide')
    $('#modalsickness').modal({
        backdrop: 'static',
        keyboard: false
    });
    $('#modalimprove').modal('show')
    console.log(illInfo);
    

})
$("#none2").click(function (){

    console.log(illInfo)
    console.log("Length "+ illInfo.length);
    $('#modalsickness').modal('hide')
    $('#modalsickness').modal({
        backdrop: 'static',
        keyboard: false
    });
    $('#modalimprove').modal('show')
})
// current condition
$('#improve').click(function () {
    currentCondition = $(this).attr('id');
    console.log(currentCondition);
    $('#modalimprove').modal('hide')
    $('#modalimprove').modal({
        backdrop: 'static',
        keyboard: false
    });
    $('#modalEvalation').modal('show')
    logic();
})

$('#Nochange').click(function () {
    currentCondition = $(this).attr('id');
    console.log(currentCondition);
    $('#modalimprove').modal('hide')
    $('#modalimprove').modal({
        backdrop: 'static',
        keyboard: false
    });
    $('#modalEvalation').modal('show')
    logic();
})

$('#worsened').click(function () {
    currentCondition = $(this).attr('id');
    console.log(currentCondition);
    $('#modalimprove').modal('hide')
    $('#modalimprove').modal({
        backdrop: 'static',
        keyboard: false
    });
    $('#modalEvalation').modal('show')
    logic();
})
$('#considerably').click(function () {
    currentCondition = $(this).attr('id');
    console.log(currentCondition);
    $('#modalimprove').modal('hide')
    $('#modalimprove').modal({
        backdrop: 'static',
        keyboard: false
    });
    $('#modalEvalation').modal('show')
    logic();
})


function logic(){
    formData = {
        "age" : age,
        "gender": gender,
        "temperature": temperature,
        "contacts": contacts,
        "currentCondition": currentCondition,
        "symptoms": symptoms,
        "illness": illInfo,
        "additionalInfo": addInfo,
    }
    var tmFlag, conFlag, curFlag, symFlag, illFlag, addFlag, flag;
    // console.log(formData);
    // Checking inputs and raising flag
    if(formData.temperature !== "normal"){
        tmFlag = 1;
    }else{
        tmFlag = 0;
    }
    if(formData.contacts == "contact"  || formData.contacts == "history"){
        conFlag = 0;
    }else{
        conFlag = 1;
    }
    if(formData.currentCondition != "improved"){
        curFlag = 1;
    }else{
        curFlag = 0;
    }
    if(formData.symptoms.length != 0){
        symFlag = 1;
    }else{
        symFlag = 0;
    }

    if(formData.additionalInfo.length != 0){
        addFlag = 1;
    }else{
        addFlag = 0;
    }
    // Analysing the results
    var result;
    // when no flag if raised
    if(tmFlag == 0 && conFlag == 0 && curFlag == 0 && symFlag == 0 && addFlag == 0){
        result = "low";
        add_result = "advice";
    }

    // Analyzing the results
    if(formData.symptoms.length >= 3 && tmFlag == 1){
        result = "low";
        add_result = "advice";
        if(formData.additionalInfo.length > 3){
            result = "medium";
            add_result = "normal";
            if(conFlag == 1){
                result = "high";
                if(curFlag == 1){
                    if(formData.currentCondition != "improved"){
                        add_result = "urgent"
                    }else{
                        result = "medium";
                        add_result = "urgent"
                    }
                }
            }
        }else if(conFlag == 1){
            result = "high";
            if(curFlag == 1){
                if(formData.currentCondition == "improved"){
                    add_result = "urgent"
                }else{
                    result = "medium";
                    add_result = "urgent"
                }
            }
        }
    }else if(formData.additionalInfo.length >= 3 && tmFlag == 1){
        result = "low";
        add_result = "advice";
        if(conFlag == 1){
            result = "high";
            if(curFlag == 1){
                if(formData.currentCondition !== "improved"){
                    add_result = "urgent"
                }else{
                    result = "medium";
                    add_result = "urgent"
                }
            }
        }
    }else if(symFlag == 1){
        result = "low";
        add_result = "advice";
        if(addFlag == 1){
            result = "medium";
            add_result = "advice"
            if(illFlag == 1){
                result = "medium";
                add_result = "normal"
                if(conFlag == 1){
                    result = "high";
                    if(curFlag == 1){
                        add_result = "urgent"
                    }else{
                        add_result = "normal"
                    }
                }
            }else{
                if(conFlag == 1){
                    result = "high";
                    if(curFlag == 1){
                        add_result = "urgent"
                    }
                }
            }
        }else{
            if(illFlag == 1){
                result = "medium";
                add_result = "normal"
                if(conFlag == 1){
                    result = "high";
                    if(curFlag == 1){
                        add_result = "urgent"
                    }else{
                        add_result = "normal"
                    }
                }
            }else{
                if(conFlag == 1){
                    result = "high";
                    if(curFlag == 1){
                        add_result = "urgent"
                    }
                }
            }
        }
    }else if(addFlag == 1){
        result = "low";
        add_result = "advice"
        if(illFlag == 1){
            result = "medium";
            add_result = "normal"
            if(conFlag == 1){
                result = "high";
                if(curFlag == 1){
                    add_result = "urgent"
                }
            }
        }else{
            if(conFlag == 1){
                result = "high";
                if(curFlag == 1){
                    add_result = "urgent";
                }
            }
        }
    }else if(illFlag == 1){
        result = "low";
        add_result = "advice"
        if(conFlag == 1){
            result = "high";
            result = "normal";
            if(curFlag == 1){
                add_result = "urgent"
            }
        }
    }else if(conFlag == 1){
        result = "high";
        add_result = "normal";
        if(curFlag == 1){
            add_result = "urgent"
        }
    }else if(tmFlag == 1){
        result = "low";
        add_result = "advice"
    }else{
        result = "low";
        add_result = "advice"
    }

    // check final results

    //Making deductions and conclusion
    if(result.toLowerCase() == "low"){
        report = $(".low");
        $(".result").html(report);
        report.show();
    }else if(result.toLowerCase() == "medium"){
        report = $(".medium");
        $(".result").html(report);
        report.show();
    }else{
        report = $(".high");
        $(".result").html(report);
        report.show();
    }

    console.log(result);
    console.log(add_result);
}
})