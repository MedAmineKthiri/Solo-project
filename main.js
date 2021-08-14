var myTeam =function(){
	var team={}
	team.player1={
		goals:0,
		assists:0,
		missedGoals:0

	}
	team.player2={
		goals:0,
		assists:0,
		missedGoals:0

	}
	team.player3={
		goals:0,
		assists:0,
		missedGoals:0

	}
	team.player4={
		goals:0,
		assists:0,
		missedGoals:0

	}
	team.addGoalPlayer1=addGoalPlayer1
	team.addAssistPlayer1=addAssistPlayer1
	team.addMissedGoalPlayer1=addMissedGoalPlayer1
	team.addGoalPlayer2=addGoalPlayer2
	team.addAssistPlayer2=addAssistPlayer2
	team.addMissedGoalPlayer2=addMissedGoalPlayer2
	team.addGoalPlayer3=addGoalPlayer3
	team.addAssistPlayer3=addAssistPlayer3
	team.addMissedGoalPlayer3=addMissedGoalPlayer3
	team.addGoalPlayer4=addGoalPlayer4
	team.addAssistPlayer4=addAssistPlayer4
	team.addMissedGoalPlayer4=addMissedGoalPlayer4
	return team
}

var addGoalPlayer1=function (goal){
	this.player1.goals=this.player1.goals+goal
}	
var addAssistPlayer1=function (assist){
	this.player1.addAssistPlayer1=this.player1.assists+addAssistPlayer1
}	
var addMissedGoalPlayer1= function(missed){
	this.player1.missedGoals=this.player1.missedGoals+missed

}

var addGoalPlayer2=function (goal){
	this.player2.goals=this.player2.goals+goal

}	
var addAssistPlayer2=function (assist){
	this.player2.assists=this.player2.assists+assist
}	
var addMissedGoalPlayer2= function(missed){
	this.player2.missedGoals=this.player2.missedGoals+missed

}

var addGoalPlayer3=function (goal){
	this.player3.goals=this.player3.goals+goal
}	
var addAssistPlayer3=function (assist){
	this.player3.assists=this.player3.assists+assist
}	
var addMissedGoalPlayer3= function(missed){
	this.player3.missedGoals=this.player3.missedGoals+missed

}
var addGoalPlayer4=function (goal){
	this.player4.goals=this.player4.goals+goal
}	
var addAssistPlayer4=function (assist){
	this.player4.assists=this.player4.assists+assist
}	
var addMissedGoalPlayer4= function(missed){
	this.player4.missedGoals=this.player4.missedGoals+missed

}



$('#submitGoal').click(function(){
	console.log( team.addGoalPlayer1( ($('#goal').val())+team.addAssistPlayer1(($('#assist').val()-team.addMissedGoalPlayer1($('#missed').val())))))
	
	})

// $('#submit').click (function(){
// 	var x=0
// 	x=team.addGoalPlayer1($('.goal').val())
// 	alert(x)
// })

function submit(){

var goals=Number($(".goal").val());
var assists=Number($(".assist").val());
var missedGoals=Number($(".missed").val());
alert((goals+assists)-missedGoals) 
}


// function submit2(){

// var name=($("#addPlayer").val());
// var goals=($("#playerGoals").val());
// var assist=($("#playerAssists").val());
// alert((name+'ADDED : '+goals+'goals and'+ assist+ 'assists') 
// }
$("#submit2").click(function(){

	var p1=$("#Player1").val()
	var p2=$("#Player2").val()
	var p3=$("#Player3").val()
	alert(p1+' is added with'+p2+' goals and '+p3+' assists')
})

