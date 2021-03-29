 //================radio option div show==============
        $(document).ready(function(){
            $('input[type="radio"]').click(function(){
                var inputValue = $(this).attr("value");
                var targetBox = $("." + inputValue);
                $(".box").not(targetBox).hide();
                $(targetBox).show();
            });
        });


	//=======================================date picker
			$(function () {
				// INITIALIZE DATEPICKER PLUGIN
				$('.datepicker').datepicker({
					clearBtn: true,
					format: "dd/mm/yyyy"
				});


				// FOR DEMO PURPOSE
				$('#birthDate').on('change', function () {
					var pickedDate = $('input').val();
					$('#pickedDate').html(pickedDate);
				});
			});



 /* -------------------------------------------------------------
            bootstrapTabControl
        ------------------------------------------------------------- */
		(function() {
  $('.btn-tab-prev').on('click', function(e) {
    e.preventDefault()
    $('#' + $('.nav-item > .active').parent().prev().find('a').attr('id')).tab('show')
  })
  $('.btn-tab-next').on('click', function(e) {
    e.preventDefault()
    $('#' + $('.nav-item > .active').parent().next().find('a').attr('id')).tab('show')
  })
})();


//==========================yes no slect div==============
function showNo(){
  document.getElementById('yesContent').style.display ='none';
}
function showYes(){
  document.getElementById('yesContent').style.display = 'block';
}


$(function() {                      
  $(".btn").click(function() { 
	  $(this).removeClass("btn-outline-secondary");
    $(this).addClass("btn-success");     
  });
});


//=========================salary income form show hide================================
function salariesInconme_details_Show(){
	document.getElementById('salariesInconme_details').style.display ='block';
	document.getElementById('salariInfo').style.display ='none';
	
}
function salariesInconme_details_setNo(){
  document.getElementById('salariesInconme_details').style.display = 'none';
	document.getElementById('no-text').style.display = 'block';
}


//===============================interest on security income show hide==================

function InterestOnSecurities_Show(){
	document.getElementById('InterestOnSecurities_fraction_or_total').style.display ='block';
	document.getElementById('InterestOnSecurities_verification').style.display ='none';
	
}
function InterestOnSecurities_breakdown(){
	document.getElementById('InterestOnSecurities_fraction').style.display ='block';
	document.getElementById('InterestOnSecurities_total').style.display ='none';
	
}
function InterestOnSecurities_setNo(){
	document.getElementById('no-text-interest').style.display = 'block';
}

//===============================PROPERTY income show hide==================
function property_details_Show(){
	document.getElementById('property_details').style.display ='block';
	document.getElementById('Property_verification').style.display ='none';
	
}
function property_details_setNo(){
	document.getElementById('no-text-propert').style.display = 'block';
}

//===============================Agriculture income show hide==================

function agriculture_Show(){
	document.getElementById('agriculture_details').style.display ='block';
	document.getElementById('agriculture_verification').style.display ='none';
	
}
function agriculture_breakdown(){
	document.getElementById('IncomeAgriculture_fraction').style.display ='block';
	document.getElementById('IncomeAgriculture_total').style.display ='none';
	
}
function agriculture_setNo(){
	document.getElementById('no-text-agriculture').style.display = 'block';
}
//===============================business income show hide==================
function business_details_Show(){
	document.getElementById('business_details').style.display ='block';
	document.getElementById('business_verification').style.display ='none';
	
}
function business_details_setNo(){
	document.getElementById('no-text-business').style.display = 'block';
}

//===============================Share of Profit in Firm  show hide==================

function IncomeShareProfit_Show(){
	document.getElementById('IncomeShareProfit_details').style.display ='block';
	document.getElementById('IncomeShareProfit_verification').style.display ='none';
	
}
function IncomeShareProfit_breakdown(){
	document.getElementById('IncomeShareProfit_fraction').style.display ='block';
	document.getElementById('IncomeShareProfit_total').style.display ='none';
	
}
function IncomeShareProfit_setNo(){
	document.getElementById('no-text-profitInfirm').style.display = 'block';
}


//===============================Spouse/Child Firm  show hide==================

function IncomeSpouseOrChild_Show(){
	document.getElementById('IncomeSpouseOrChild_details').style.display ='block';
	document.getElementById('IncomeSpouseOrChild_verification').style.display ='none';
	
}
function IncomeSpouseOrChild_breakdown(){
	document.getElementById('IncomeSpouseOrChild_fraction').style.display ='block';
	document.getElementById('IncomeSpouseOrChild_total').style.display ='none';
	
}
function IncomeSpouseOrChild_setNo(){
	document.getElementById('no-text-IncomeSpouseOrChild').style.display = 'block';
}

//===============================Capital Gains show hide==================

function IncomeCapitalGains_Show(){
	document.getElementById('IncomeCapitalGains_details').style.display ='block';
	document.getElementById('IncomeCapitalGains_verification').style.display ='none';
	
}
function IncomeCapitalGains_breakdown(){
	document.getElementById('IncomeCapitalGains_fraction').style.display ='block';
	document.getElementById('IncomeCapitalGains_total').style.display ='none';
	
}
function IncomeCapitalGains_setNo(){
	document.getElementById('no-text-IncomeCapitalGains').style.display = 'block';
}

//===============================Income others show hide==================

function IncomeOtherSource_Show(){
	document.getElementById('IncomeOtherSource_details').style.display ='block';
	document.getElementById('IncomeOtherSource_verification').style.display ='none';
	
}

function IncomeOtherSource_setNo(){
	document.getElementById('no-text-IncomeOtherSource').style.display = 'block';
}


//===============================Foregin Income show hide==================

function ForeignIncome_Show(){
	document.getElementById('ForeignIncome_details').style.display ='block';
	document.getElementById('ForeignIncome_verification').style.display ='none';
	
}
function ForeignIncome_breakdown(){
	document.getElementById('ForeignIncome_fraction').style.display ='block';
	document.getElementById('ForeignIncome_total').style.display ='none';
	
}
function ForeignIncome_setNo(){
	document.getElementById('no-text-ForeignIncome').style.display = 'block';
}

//===============================Tax rebate show hide==================

function IncomeTaxRebate_Show(){
	document.getElementById('IncomeTaxRebate_details').style.display ='block';
	document.getElementById('IncomeTaxRebate_verification').style.display ='none';
	
}

function IncomeTaxRebate_setNo(){
	document.getElementById('no-text-IncomeTaxRebate').style.display = 'block';
}

//===============================IncomeTaxDeductedAtSource show hide==================

function IncomeTaxDeductedAtSource_Show(){
	document.getElementById('IncomeTaxDeductedAtSource_details').style.display ='block';
	document.getElementById('IncomeTaxDeductedAtSource_verification').style.display ='none';
	
}

function IncomeTaxDeductedAtSource_setNo(){
	document.getElementById('no-text-IncomeTaxDeductedAtSource').style.display = 'block';
}

//===============================Tax advanced paid show hide==================

function IncomeTaxInAdvance_Show(){
	document.getElementById('IncomeTaxInAdvance_details').style.display ='block';
	document.getElementById('IncomeTaxInAdvance_verification').style.display ='none';
	
}
function IncomeTaxInAdvance_breakdown(){
	document.getElementById('IncomeTaxInAdvance_fraction').style.display ='block';
	document.getElementById('IncomeTaxInAdvance_total').style.display ='none';
	
}
function IncomeTaxInAdvance_setNo(){
	document.getElementById('no-text-IncomeTaxInAdvance').style.display = 'block';
}

//===============================AdjustmentTaxRefund show hide==================

function AdjustmentTaxRefund_Show(){
	document.getElementById('AdjustmentTaxRefund_details').style.display ='block';
	document.getElementById('AdjustmentTaxRefund_verification').style.display ='none';
	
}

function AdjustmentTaxRefund_setNo(){
	document.getElementById('no-text-AdjustmentTaxRefund').style.display = 'block';
}


//===============================business capital show hide==================

function business_capital_Show(){
	document.getElementById('business_capital_fraction_or_total').style.display ='block';
	document.getElementById('business_capital_verification').style.display ='none';
	
}
function business_capital_breakdown(){
	document.getElementById('business_capital_fraction').style.display ='block';
	document.getElementById('business_capital_total').style.display ='none';
	
}
function business_capital_setNo(){
	document.getElementById('no-text-business_capital').style.display = 'block';
}

//===============================shareholding_company show hide==================

function shareholding_company_Show(){
	document.getElementById('shareholding_company_fraction_or_total').style.display ='block';
	document.getElementById('shareholding_company_verification').style.display ='none';
	
}

function shareholding_company_setNo(){
	document.getElementById('no-text-shareholding_company').style.display = 'block';
}
//===============================non_agriculture_property show hide==================

function non_agriculture_property_Show(){
	document.getElementById('non_agriculture_property_details').style.display ='block';
	document.getElementById('non_agriculture_property_verification').style.display ='none';
	
}

function non_agriculture_property_setNo(){
	document.getElementById('no-text-non_agriculture_property').style.display = 'block';
}

//===============================AgricultureProperty show hide==================

function AgricultureProperty_Show(){
	document.getElementById('AgricultureProperty_details').style.display ='block';
	document.getElementById('AgricultureProperty_verification').style.display ='none';
	
}
function AgricultureProperty_breakdown(){
	document.getElementById('AgricultureProperty_fraction').style.display ='block';
	document.getElementById('AgricultureProperty_total').style.display ='none';
	
}
function AgricultureProperty_setNo(){
	document.getElementById('no-text-AgricultureProperty').style.display = 'block';
}

//===============================non_agriculture_property show hide==================

function investment_details_Show(){
	document.getElementById('investment_details').style.display ='block';
	document.getElementById('investment_verification').style.display ='none';
	
}

function investment_details_setNo(){
	document.getElementById('no-text-investment').style.display = 'block';
}

//===============================motor_vehicle show hide==================

function motor_vehicle_details_Show(){
	document.getElementById('motor_vehicle_details').style.display ='block';
	document.getElementById('motor_vehicle_verification').style.display ='none';
	
}

function motor_vehicle_setNo(){
	document.getElementById('no-text-motor_vehicle').style.display = 'block';
}

//===============================furniture show hide==================

function furniture_Show(){
	document.getElementById('furniture_details').style.display ='block';
	document.getElementById('furniture_verification').style.display ='none';
	
}
function furniture_breakdown(){
	document.getElementById('furniture_fraction').style.display ='block';
	document.getElementById('furniture_total').style.display ='none';
	
}
function furniture_setNo(){
	document.getElementById('no-text-furniture').style.display = 'block';
}

//===============================Jewelry show hide==================

function Jewelry_Show(){
	document.getElementById('Jewelry_details').style.display ='block';
	document.getElementById('Jewelry_verification').style.display ='none';
	
}
function Jewelry_breakdown(){
	document.getElementById('Jewelry_fraction').style.display ='block';
	document.getElementById('Jewelry_total').style.display ='none';
	
}
function Jewelry_setNo(){
	document.getElementById('no-text-Jewelry').style.display = 'block';
}

//===============================electronic_equipment show hide==================

function electronic_equipment_Show(){
	document.getElementById('electronic_equipment_details').style.display ='block';
	document.getElementById('electronic_equipment_verification').style.display ='none';
	
}
function electronic_equipment_breakdown(){
	document.getElementById('electronic_equipment_fraction').style.display ='block';
	document.getElementById('electronic_equipment_total').style.display ='none';
	
}
function electronic_equipment_setNo(){
	document.getElementById('no-text-electronic_equipment').style.display = 'block';
}

//===============================cash_outsideshow hide==================

function cash_outside_business_Show(){
	document.getElementById('cash_outside_business_details').style.display ='block';
	document.getElementById('cash_outside_business_verification').style.display ='none';
	
}
function cash_outside_business_breakdown(){
	document.getElementById('cash_outside_business_fraction').style.display ='block';
	document.getElementById('cash_outside_business_total').style.display ='none';
	
}
function cash_outside_business_setNo(){
	document.getElementById('no-text-cash_outside_business').style.display = 'block';
}
//===============================AnyOtherAsset hide==================

function AnyOtherAsset_Show(){
	document.getElementById('AnyOtherAsset_details').style.display ='block';
	document.getElementById('AnyOtherAsset_verification').style.display ='none';
	
}
function AnyOtherAsset_breakdown(){
	document.getElementById('AnyOtherAsset_fraction').style.display ='block';
	document.getElementById('AnyOtherAsset_total').style.display ='none';
	
}
function AnyOtherAsset_setNo(){
	document.getElementById('no-text-AnyOtherAsset').style.display = 'block';
}
//===============================OtherAssetReceipt hide==================

function OtherAssetReceipt_Show(){
	document.getElementById('OtherAssetReceipt_details').style.display ='block';
	document.getElementById('OtherAssetReceipt_verification').style.display ='none';
	
}
function OtherAssetReceipt_breakdown(){
	document.getElementById('OtherAssetReceipt_fraction').style.display ='block';
	document.getElementById('OtherAssetReceipt_total').style.display ='none';
	
}
function OtherAssetReceipt_setNo(){
	document.getElementById('no-text-OtherAssetReceipt').style.display = 'block';
}

//===============================net_wealth hide==================

function net_wealth_Show(){
	document.getElementById('net_wealth_details').style.display ='block';
	document.getElementById('net_wealth_verification').style.display ='none';
	
}

function  net_wealth_setNo(){
	document.getElementById('no-text-net_wealth').style.display = 'block';
}


//===============================mortgages_on_property hide==================

function mortgages_on_property_Show(){
	document.getElementById('mortgages_on_property_fraction_or_total').style.display ='block';
	document.getElementById('mortgages_on_property_verification').style.display ='none';
	
}
function mortgages_on_property_breakdown(){
	document.getElementById('mortgages_on_property_fraction').style.display ='block';
	document.getElementById('mortgages_on_property_total').style.display ='none';
	
}
function mortgages_on_property_setNo(){
	document.getElementById('no-text-mortgages_on_property').style.display = 'block';
}

//===============================net_wealth hide==================

function unsecured_loans_Show(){
	document.getElementById('unsecured_loans_fraction_or_total').style.display ='block';
	document.getElementById('unsecured_loans_verification').style.display ='none';
	
}

function  unsecured_loans_setNo(){
	document.getElementById('no-text-unsecured_loans').style.display = 'block';
}


//===============================bank_loans hide==================

function bank_loans_Show(){
	document.getElementById('bank_loans_details').style.display ='block';
	document.getElementById('bank_loans_verification').style.display ='none';
	
}
function bank_loans_breakdown(){
	document.getElementById('bank_loans_fraction').style.display ='block';
	document.getElementById('bank_loans_total').style.display ='none';
	
}
function bank_loans_setNo(){
	document.getElementById('no-text-bank_loans').style.display = 'block';
}
//===============================personal_food_expenses hide==================

function personal_food_expenses_Show(){
	document.getElementById('personal_food_expenses_fraction_or_total').style.display ='block';
	document.getElementById('personal_food_expenses_verification').style.display ='none';
	
}
function personal_food_expenses_breakdown(){
	document.getElementById('personal_food_expenses_fraction').style.display ='block';
	document.getElementById('personal_food_expenses_total').style.display ='none';
	
}
function personal_food_expenses_setNo(){
	document.getElementById('no-text-personal_food_expenses').style.display = 'block';
}


//===============================OTHER_loans hide==================

function others_loan_Show(){
	document.getElementById('others_loan_details').style.display ='block';
	document.getElementById('others_loan_verification').style.display ='none';
	
}
function others_loan_breakdown(){
	document.getElementById('others_loan_fraction').style.display ='block';
	document.getElementById('others_loan_total').style.display ='none';
	
}
function others_loan_setNo(){
	document.getElementById('no-text-others_loan').style.display = 'block';
}


//===============================accommodation_expenses hide==================

function accommodation_expenses_Show(){
	document.getElementById('accommodation_expenses_fraction_or_total').style.display ='block';
	document.getElementById('accommodation_expenses_verification').style.display ='none';
	
}
function accommodation_expenses_breakdown(){
	document.getElementById('accommodation_expenses_fraction').style.display ='block';
	document.getElementById('accommodation_expenses_total').style.display ='none';
	
}
function accommodation_expenses_setNo(){
	document.getElementById('no-text-accommodation_expenses').style.display = 'block';
}

//===============================transportation_expenses hide==================

function transportation_expenses_Show(){
	document.getElementById('transportation_expenses_fraction_or_total').style.display ='block';
	document.getElementById('transportation_expenses_verification').style.display ='none';
	
}
function transportation_expenses_breakdown(){
	document.getElementById('transportation_expenses_fraction').style.display ='block';
	document.getElementById('transportation_expenses_total').style.display ='none';
	
}
function transportation_expenses_setNo(){
	document.getElementById('no-text-transportation_expenses').style.display = 'block';
}
//===============================other_transport_expenses hide==================

function other_transport_expenses_Show(){
	document.getElementById('other_transport_expenses_fraction_or_total').style.display ='block';
	document.getElementById('other_transport_expenses_verification').style.display ='none';
	
}
function other_transport_expenses_breakdown(){
	document.getElementById('other_transport_expenses_fraction').style.display ='block';
	document.getElementById('other_transport_expenses_total').style.display ='none';
	
}
function other_transport_expenses_setNo(){
	document.getElementById('no-text-other_transport_expenses').style.display = 'block';
}
//===============================electricity_expenses hide==================

function electricity_expenses_Show(){
	document.getElementById('electricity_expenses_fraction_or_total').style.display ='block';
	document.getElementById('electricity_expenses_verification').style.display ='none';
	
}
function electricity_expenses_breakdown(){
	document.getElementById('electricity_expenses_fraction').style.display ='block';
	document.getElementById('electricity_expenses_total').style.display ='none';
	
}
function electricity_expenses_setNo(){
	document.getElementById('no-text-electricity_expenses').style.display = 'block';
}
//===============================wasa_bill_expenses hide==================

function wasa_bill_Show(){
	document.getElementById('wasa_bill_fraction_or_total').style.display ='block';
	document.getElementById('wasa_bill_verification').style.display ='none';
	
}
function wasa_bill_breakdown(){
	document.getElementById('wasa_bill_fraction').style.display ='block';
	document.getElementById('wasa_bill_total').style.display ='none';
	
}
function wasa_bill_setNo(){
	document.getElementById('no-text-wasa_bill').style.display = 'block';
}
//===============================gas_expenses hide==================

function gas_expenses_Show(){
	document.getElementById('gas_expenses_fraction_or_total').style.display ='block';
	document.getElementById('gas_expenses_verification').style.display ='none';
	
}
function gas_expenses_breakdown(){
	document.getElementById('gas_expenses_fraction').style.display ='block';
	document.getElementById('gas_expenses_total').style.display ='none';
	
}
function gas_expenses_setNo(){
	document.getElementById('no-text-gas_expenses').style.display = 'block';
}
//===============================telephone_expenses hide==================

function telephone_expenses_Show(){
	document.getElementById('telephone_expenses_fraction_or_total').style.display ='block';
	document.getElementById('telephone_expenses_verification').style.display ='none';
	
}
function telephone_expenses_breakdown(){
	document.getElementById('telephone_expenses_fraction').style.display ='block';
	document.getElementById('telephone_expenses_total').style.display ='none';
	
}
function telephone_expenses_setNo(){
	document.getElementById('no-text-telephone_expenses').style.display = 'block';
}
//===============================other_household_expenseshide==================

function other_household_expenses_Show(){
	document.getElementById('other_household_expenses_fraction_or_total').style.display ='block';
	document.getElementById('other_household_expenses_verification').style.display ='none';
	
}
function other_household_expenses_breakdown(){
	document.getElementById('other_household_expenses_fraction').style.display ='block';
	document.getElementById('other_household_expenses_total').style.display ='none';
	
}
function other_household_expenses_setNo(){
	document.getElementById('no-text-other_household_expenses').style.display = 'block';
}
//===============================child_edu_expenses hide show ==================

function child_edu_expenses_Show(){
	document.getElementById('child_edu_expenses_fraction_or_total').style.display ='block';
	document.getElementById('child_edu_expenses_verification').style.display ='none';
	
}
function child_edu_expenses_breakdown(){
	document.getElementById('child_edu_expenses_fraction').style.display ='block';
	document.getElementById('child_edu_expenses_total').style.display ='none';
	
}
function child_edu_expenses_setNo(){
	document.getElementById('no-text-child_edu_expenses').style.display = 'block';
}
//===============================foreign_travel_expenses hide show ==================

function foreign_travel_expenses_Show(){
	document.getElementById('foreign_travel_expenses_fraction_or_total').style.display ='block';
	document.getElementById('foreign_travel_expenses_verification').style.display ='none';
	
}
function foreign_travel_expenses_breakdown(){
	document.getElementById('foreign_travel_expenses_fraction').style.display ='block';
	document.getElementById('foreign_travel_expenses_total').style.display ='none';
	
}
function foreign_travel_expenses_setNo(){
	document.getElementById('no-text-foreign_travel_expenses').style.display = 'block';
}
//===============================festival_other_expenses hide show ==================

function festival_other_expenses_Show(){
	document.getElementById('festival_other_expenses_fraction_or_total').style.display ='block';
	document.getElementById('festival_other_expenses_verification').style.display ='none';
	
}
function festival_other_expenses_breakdown(){
	document.getElementById('festival_other_expenses_fraction').style.display ='block';
	document.getElementById('festival_other_expenses_total').style.display ='none';
	
}
function festival_other_expenses_setNo(){
	document.getElementById('no-text-festival_other_expenses').style.display = 'block';
}
//===============================donation_expenses hide show ==================

function donation_expenses_Show(){
	document.getElementById('donation_expenses_fraction_or_total').style.display ='block';
	document.getElementById('donation_expenses_verification').style.display ='none';
	
}
function donation_expenses_breakdown(){
	document.getElementById('donation_expenses_fraction').style.display ='block';
	document.getElementById('donation_expenses_total').style.display ='none';
	
}
function donation_expenses_setNo(){
	document.getElementById('no-text-donation_expenses').style.display = 'block';
}

//===============================other_special_expenses hide show ==================

function other_special_expenses_Show(){
	document.getElementById('other_special_expenses_fraction_or_total').style.display ='block';
	document.getElementById('other_special_expenses_verification').style.display ='none';
	
}
function other_special_expenses_breakdown(){
	document.getElementById('other_special_expenses_fraction').style.display ='block';
	document.getElementById('other_special_expenses_total').style.display ='none';
	
}
function other_special_expenses_setNo(){
	document.getElementById('no-text-other_special_expenses').style.display = 'block';
}
//===============================other_expenses hide show ==================

function other_expenses_Show(){
	document.getElementById('other_expenses_fraction_or_total').style.display ='block';
	document.getElementById('other_expenses_verification').style.display ='none';
	
}
function other_expenses_breakdown(){
	document.getElementById('other_expenses_fraction').style.display ='block';
	document.getElementById('other_expenses_total').style.display ='none';
	
}
function other_expenses_setNo(){
	document.getElementById('no-text-other_expenses').style.display = 'block';
}
//===============================tax_at_source_expenses hide show ==================

function tax_at_source_expenses_Show(){
	document.getElementById('tax_at_source_expenses_fraction_or_total').style.display ='block';
	document.getElementById('tax_at_source_expenses_verification').style.display ='none';
	
}
function tax_at_source_expenses_breakdown(){
	document.getElementById('tax_at_source_expenses_fraction').style.display ='block';
	document.getElementById('tax_at_source_expenses_total').style.display ='none';
	
}
function tax_at_source_expenses_setNo(){
	document.getElementById('no-text-tax_at_source_expenses').style.display = 'block';
}
//===============================surcharge_other_expenses hide show ==================

function surcharge_other_expenses_Show(){
	document.getElementById('surcharge_other_expenses_fraction_or_total').style.display ='block';
	document.getElementById('surcharge_other_expenses_verification').style.display ='none';
	
}
function surcharge_other_expenses_breakdown(){
	document.getElementById('surcharge_other_expenses_fraction').style.display ='block';
	document.getElementById('surcharge_other_expenses_total').style.display ='none';
	
}
function surcharge_other_expenses_setNo(){
	document.getElementById('no-text-surcharge_other_expenses').style.display = 'block';
}
//===============================loss_deductions_expenses hide show ==================

function loss_deductions_expenses_Show(){
	document.getElementById('loss_deductions_expenses_fraction_or_total').style.display ='block';
	document.getElementById('loss_deductions_expenses_verification').style.display ='none';
	
}
function loss_deductions_expenses_breakdown(){
	document.getElementById('loss_deductions_expenses_fraction').style.display ='block';
	document.getElementById('loss_deductions_expenses_total').style.display ='none';
	
}
function loss_deductions_expenses_setNo(){
	document.getElementById('no-text-loss_deductions_expenses').style.display = 'block';
}
//===============================loss_deductions_expenses hide show ==================

function gift_donation_contribution_Show(){
	document.getElementById('gift_donation_contribution_fraction_or_total').style.display ='block';
	document.getElementById('gift_donation_contribution_verification').style.display ='none';
	
}

function gift_donation_contribution_setNo(){
	document.getElementById('no-text-gift_donation_contribution').style.display = 'block';
}