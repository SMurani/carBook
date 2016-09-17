<%--
  Created by IntelliJ IDEA.
  User: sammy
  Date: 8/22/16
  Time: 9:01 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

    <h2>Vehicle Registration Form</h2>
    <div class="divider-xs"></div>
    <form class="form-inline form-custom" id="form-appointment" method="post">
        <div class="row">
            <h3>Basic Car Information</h3>
            <div class="col-sm-12 col-md-6">
                <div class="form-group">
                    <label>Owner:</label>
                    <input type="text" class="form-control" name="name" value="">
                </div>
                <div class="form-group">
                    <label>Model:</label>
                    <input type="text" class="form-control" name="email" value="">
                </div>
            </div>
            <div class="col-sm-12 col-md-6">
                <div class="form-group">
                    <label>Type:</label>
                    <input type="text" class="form-control" name="lastname" value="">
                </div>
            </div>
            <div class="col-sm-12 col-md-6">
                <div class="form-group">
                    <label>Make:</label>
                    <input type="text" class="form-control" name="lastname" value="">
                </div>
            </div>
            <div class="col-sm-12 col-md-6">
                <div class="form-group">
                    <label>No of Seats:</label>
                    <input type="text" class="form-control" name="lastname" value="">
                </div>
            </div>
            <div class="col-sm-12 col-md-6">
                <div class="form-group">
                    <label>Price per day:</label>
                    <input type="text" class="form-control" name="lastname" value="">
                </div>
            </div>


            <div class="col-sm-12 col-md-6">
                <div class="form-group">
                    <label>Plate Number:</label>
                    <input type="text" class="form-control" name="lastname" value="">
                </div>
            </div>
            <div class="col-sm-12 col-md-6">
                <div class="form-group">
                    <label>Gear Type:</label>
                    <input type="text" class="form-control" name="lastname" value="">
                </div>
            </div>
            <div class="col-sm-12 col-md-6">
                <div class="form-group">
                    <label>Photo:</label>
                    <input type="file"  name="carPhoto" id="inputVehicle9" >
                </div>
            </div>

            <div class="col-sm-12 col-md-6">
                <div class="form-group">
                    <label>Fuel Cons(KM/L):</label>
                    <input type="number" class="form-control" name="lastname" value="" required="required" placeholder="e.g 10km/l">
                </div>
            </div>
<h3>Additional Car Features</h3>
            <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                    <div class="form-group">
                        <label>Display:</label>
                        <input type="text" class="form-control" name="lastname" value="">
                    </div>
                </div>
                <div class="col-xs-6 col-sm-12 col-md-4 col-lg-3">
                    <div class="form-group">
                        <label>Speakers:</label>
                        <input type="text" class="form-control" name="lastname" value="">
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-4 col-md-4">
                    <div class="form-group">
                        <label>Stability:</label>
                        <input type="text" class="form-control" name="lastname" value="">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                    <div class="form-group">
                        <label>HillStart:</label>
                        <input type="text" class="form-control" name="lastname" value="">
                    </div>
                </div>
                <div class="col-xs-6 col-sm-12 col-md-4 col-lg-4">
                    <div class="form-group">
                        <label>vPower:</label>
                        <input type="text" class="form-control" name="lastname" value="">
                    </div>
                </div>

            </div>
<h3>Additonal Car Comments</h3>
            <div class="col-sm-12">
                <div class="form-group">
                    <label>Comments:</label>
                    <textarea class="form-control" name="message"></textarea>
                </div>
            </div>
        </div>
        <div class="divider-xs"></div>

        <div class="divider-md hidden-xs"></div>
        <div class="button-submit-wrapper">
            <button class="btn-default btn-lg"  type="submit" id="submit"><span class="icon flaticon-uniE024"></span>Save</button>
        </div>
    </form>
    <div class="divider-lg"></div>

