const weight=document.getElementById('weight');
const height=document.getElementById('height');
const reload=document.getElementById('reload');
const button=document.getElementById('button');
const details=document.getElementById('details');
const res=document.getElementById('result');
const ch=document.getElementById('change');
button.addEventListener('click',()=>{

    let heightmetter=(height.value)*0.3048;
    let result=(weight.value)/(heightmetter*heightmetter);
    res.innerHTML=result.toFixed(2);
    button.style.display="none";
    res.style.background="orange"
    

    
    if(result<18.5){
        ch.innerHTML="Under weight";
        ch.style.color="red";
        details.innerHTML=`
        Increase Calorie Intake: Focus on nutrient-dense foods like nuts, seeds, avocados, whole grains, and healthy fats.
Strength Training: Build muscle mass through resistance exercises like weightlifting.
Protein-Rich Diet: Include lean meats, eggs, dairy, and plant-based proteins to support muscle growth.
Frequent Meals: Eat smaller meals more often to increase calorie intake without feeling overly full.
        `
    }
    else if(result>24.9)
    {   ch.innerHTML="Over weight";
        ch.style.color="red";
        details.innerHTML=`
        Create a Calorie Deficit: Consume fewer calories than you burn. Use tools like apps or food diaries to track intake.
Balanced Diet: Focus on vegetables, fruits, lean proteins, and whole grains. Limit processed foods and added sugars.
Increase Physical Activity:
Cardio: Aim for 150–300 minutes of moderate aerobic activity per week (e.g., walking, swimming, cycling).
Strength Training: Include 2–3 sessions per week to preserve muscle mass.
Stay Hydrated: Drinking water can help manage hunger and improve metabolism.
Mindful Eating: Eat slowly, avoid distractions, and listen to your body's hunger cues.
        
        `
    }
    else{
        ch.innerHTML="Normal weight";
        ch.style.color="Green";
        details.innerHTML=`
        Eat a variety of foods that include protein, carbohydrates, healthy fats, vitamins, and minerals:
Protein: Include fish, eggs, lean meat, lentils, and dairy products.
Carbohydrates: Opt for brown rice, whole-grain bread, oats, and sweet potatoes.
Fats: Healthy fats like nuts, olive oil, and avocados.
Fruits and Vegetables: Consume colorful vegetables and seasonal fruits daily.
Avoid excessive sugar and processed foods: Limit chips, soft drinks, and fast foods.

        `
    }

});

reload.addEventListener('click',()=>{
    
    window.location.reload()
})