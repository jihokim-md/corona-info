$(document).ready(function() {
    $.getJSON( "../kr_data.json", function( kr_data ) {
        $("#kr_inf").html(data["kr_inf"]);
        $("#kr_inf_diff").html(data["kr_inf_diff"]);
        $("#kr_inf_name").html(data["kr_inf_name"]);
        $("#kr_death").html(data["kr_death"]);
        $("#kr_death_diff").html(data["kr_death_diff"]);
        $("#kr_death_name").html(data["kr_death_name"]);
        $("#kr_cured").html(data["kr_cured"]);
        $("#kr_cured_diff").html(data["kr_cured_diff"]);
        $("#kr_cured_name").html(data["kr_cured_name"]);
        $("#kr_candidate").html(data["kr_candidate"]);
        $("#kr_candidate_diff").html(data["kr_candidate_diff"]);
        $("#kr_candidate_name").html(data["kr_candidate_name"]);
        $("#kr_test").html(data["kr_test"]);
        $("#kr_test_diff").html(data["kr_test_diff"]);
        $("#kr_test_name").html(data["kr_test_name"]);
        $("#kr_negative").html(data["kr_negative"]);
        $("#kr_negative_diff").html(data["kr_negative_diff"]);
        $("#kr_negative_name").html(data["kr_negative_name"]);
        });
    $.getJSON( "../wo_data.json", function( kr_data ) {
        $("#wo_inf").html(data["wo_inf"]);
        $("#wo_inf_diff").html(data["wo_inf_diff"]);
        $("#wo_inf_name").html(data["wo_inf_name"]);
        $("#wo_death").html(data["wo_death"]);
        $("#wo_death_diff").html(data["wo_death_diff"]);
        $("#wo_death_name").html(data["wo_death_name"]);
        $("#wo_cured").html(data["wo_cured"]);
        $("#wo_cured_diff").html(data["wo_cured_diff"]);
        $("#wo_cured_name").html(data["wo_cured_name"]);
        $("#wo_death_rate").html(data["wo_death_rate"]);
        $("#wo_death_rate_name").html(data["wo_death_rate_name"]);
        $("#wo_country_test").html(data["wo_country_test"]);
        $("#wo_country_diff").html(data["wo_country_diff"]);
        $("#wo_country_name").html(data["wo_country_name"]);
        });
    });
});


try{
   String result = "";
   JSONArray ja = new JSONArray(Json);
   for (int i = 0; i < ja.length(); i++){
      JSONObject order = ja.getJSONObject(i);
      result += "product: " + order.getString("Product") + ", maker: " + order.getString("Maker") +
                  ", price: " + order.getInt("Price") + "\n";
   }
}
catch (JSONException e){ ;}
